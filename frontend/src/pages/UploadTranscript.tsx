import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveCollegeSuggestions } from '../data/collegeStore';
import Navbar from '../components/Navbar';

type UploadState = 'idle' | 'uploading' | 'processing' | 'error';

function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}

export default function UploadTranscript() {
    const navigate = useNavigate();
    const [file, setFile] = useState<File | null>(null);
    const [state, setState] = useState<UploadState>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    function validateAndSetFile(selected: File | undefined) {
        if (!selected) return;
        if (selected.type !== 'application/pdf') {
            setErrorMsg('Please upload a PDF file.');
            setState('error');
            return;
        }
        if (selected.size > 10 * 1024 * 1024) {
            setErrorMsg('File must be under 10MB.');
            setState('error');
            return;
        }
        setErrorMsg('');
        setState('idle');
        setFile(selected);
    }

    function handleDrop(e: React.DragEvent) {
        e.preventDefault();
        setIsDragging(false);
        validateAndSetFile(e.dataTransfer.files?.[0]);
    }

    async function pollStatus(jobId: string) {
    const poll = setInterval(async () => {
        try {
            const res = await fetch(`http://localhost:8080/api/transcript/status/${jobId}`, {
                credentials: 'include',
            });
            const data = await res.json();

            if (data.status === 'COMPLETE') {
                clearInterval(poll);
                if (data.collegeSuggestions) {
                    saveCollegeSuggestions(data.collegeSuggestions);
                }
                navigate('/colleges');
            } else if (data.status === 'FAILED') {
                clearInterval(poll);
                setErrorMsg('Something went wrong processing your transcript. Please try again.');
                setState('error');
            }
            // PENDING / PROCESSING - keep polling
        } catch {
            clearInterval(poll);
            setErrorMsg('Lost connection while processing. Please try again.');
            setState('error');
        }
    }, 2000);
}

async function handleUpload() {
    if (!file) return;
    setState('uploading');

    const formData = new FormData();
    formData.append('transcript', file);

    try {
        const csrfToken = getCookie('XSRF-TOKEN');

        const res = await fetch('http://localhost:8080/api/transcript/upload', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'X-XSRF-TOKEN': csrfToken ?? '',
            },
            body: formData,
        });

        if (!res.ok) throw new Error('Upload failed');

        const data = await res.json();
        setState('processing');
        pollStatus(data.jobId);
    } catch (err) {
        setErrorMsg('Something went wrong uploading your transcript. Please try again.');
        setState('error');
    }
}

    return (
        <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen">
            <Navbar />
            <section className="px-6 py-16 md:px-12 flex flex-col items-center text-center">
                <div style={{ fontFamily: 'Poppins, sans-serif' }} className="max-w-lg">
                    <h1 className="text-4xl font-semibold text-gray-900">
                        Upload your transcript
                    </h1>
                    <p className="mt-3 text-gray-600">
                        We'll use it to build your first college list — safety, target, and reach schools tailored to you.
                    </p>
                </div>

                <div
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    onClick={() => inputRef.current?.click()}
                    className={`mt-10 w-full max-w-lg rounded-2xl border-2 border-dashed p-12 cursor-pointer transition-colors ${
                        isDragging
                            ? 'border-emerald-400 bg-emerald-50'
                            : 'border-gray-300 bg-white/70'
                    }`}
                >
                    <input
                        ref={inputRef}
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={(e) => validateAndSetFile(e.target.files?.[0])}
                    />

                    {file ? (
                        <div>
                            <p className="font-medium text-gray-900">{file.name}</p>
                            <p className="text-sm text-gray-500 mt-1">
                                {(file.size / 1024 / 1024).toFixed(1)} MB — click or drop to replace
                            </p>
                        </div>
                    ) : (
                        <div>
                            <p className="font-medium text-gray-900">
                                Drag and drop your transcript here
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                or click to browse — PDF only, up to 10MB
                            </p>
                        </div>
                    )}
                </div>

                {state === 'error' && (
                    <p className="mt-4 text-rose-600 text-sm">{errorMsg}</p>
                )}

                <button
                    onClick={handleUpload}
                    disabled={!file || state === 'uploading' || state === 'processing'}
                    className="mt-8 px-8 py-3 rounded-full bg-emerald-300 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                >
                    {state === 'uploading' && 'Uploading...'}
                    {state === 'processing' && 'Analyzing your transcript...'}
                    {(state === 'idle' || state === 'error') && 'Upload transcript'}
                </button>
            </section>
        </div>
    );
}