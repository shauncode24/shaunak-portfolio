import { useState, useEffect, useRef } from 'react';
import './Playlist.css';
import PixelTransition from './PixelTransition';
import spotifyService from '@/services/spotifyService';

export default function Playlist() {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [playlist, setPlaylist] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const iframeRef = useRef(null);

    useEffect(() => {
        loadPlaylist();
    }, []);

    // Load Spotify IFrame API
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://open.spotify.com/embed/iframe-api/v1';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const loadPlaylist = async () => {
        try {
            const trackIds = [
                '0l6g8Z8mqGbGXFOjigYetD', // Your track
                '11dFghVXANMlKmJXsNCbNl', // Cut To The Feeling
                '0VjIjW4GlUZAMYd2vXMi3b', // Blinding Lights
                '3n3Ppam7vgaVa1iaRUc9Lp', // Mr. Brightside
                '60nZcImufyMA1MKQY3dcCH', // Heat Waves
            ];

            const tracks = await Promise.all(
                trackIds.map(id => spotifyService.getTrack(id))
            );

            setPlaylist(tracks);
            setCurrentTrack(tracks[0]);
            setLoading(false);
        } catch (error) {
            console.error('Error loading tracks:', error);
            setLoading(false);
        }
    };

    const togglePlayPause = () => {
        if (iframeRef.current) {
            if (isPlaying) {
                iframeRef.current.contentWindow.postMessage(
                    JSON.stringify({ command: 'toggle' }),
                    'https://open.spotify.com'
                );
                setIsPlaying(false);
            } else {
                iframeRef.current.contentWindow.postMessage(
                    JSON.stringify({ command: 'toggle' }),
                    'https://open.spotify.com'
                );
                setIsPlaying(true);
            }
        }
    };

    const nextTrack = () => {
        const nextIndex = (currentIndex + 1) % playlist.length;
        setCurrentIndex(nextIndex);
        setCurrentTrack(playlist[nextIndex]);
        setIsPlaying(false);
    };

    const previousTrack = () => {
        const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        setCurrentTrack(playlist[prevIndex]);
        setIsPlaying(false);
    };

    if (loading) {
        return (
            <div className='default playlist-container'>
                <div className="default playlist-header">Loading...</div>
            </div>
        );
    }

    if (!currentTrack) {
        return (
            <div className='default playlist-container'>
                <div className="default playlist-header">No track available</div>
            </div>
        );
    }

    return (
        <>
            <div className='default playlist-container'>
                <div className="default playlist-header">
                    Now Playing
                </div>

                <div className="default playlist-content">
                    <PixelTransition
                        firstContent={
                            <img
                                src={currentTrack.album.images[0]?.url || "https://via.placeholder.com/300"}
                                alt={currentTrack.name}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        }
                        secondContent={
                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "grid",
                                    placeItems: "center",
                                    backgroundColor: "#111"
                                }}
                            >
                                <p style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff", textAlign: "center", padding: "10px" }}>
                                    {currentTrack.name}
                                </p>
                            </div>
                        }
                        gridSize={8}
                        pixelColor='#ffffff'
                        once={false}
                        animationStepDuration={0.4}
                        className="custom-pixel-card"
                    />
                </div>

                <div className="default playlist-name-section">
                    <div className="default playlist-name-section-left">
                        <div className="default playlist-name">
                            {currentTrack.name}
                        </div>

                        <div className="default playlist-artist">
                            {currentTrack.artists.map(artist => artist.name).join(', ')}
                        </div>
                    </div>

                    <div className="default playlist-name-section-right">
                        <a
                            href={currentTrack.external_urls.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth={0.6} width="20" height="20" fill="currentColor" className="bi bi-spotify" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Hidden Spotify Embed Player */}
                <div style={{ display: 'none' }}>
                    <iframe
                        ref={iframeRef}
                        key={currentTrack.id}
                        src={`https://open.spotify.com/embed/track/${currentTrack.id}?utm_source=generator`}
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Custom Progress Bar (Visual Only - Spotify controls actual playback) */}
                <div className="default playlist-length-section">
                    <div className="default playlist-length" style={{ cursor: 'pointer', position: 'relative' }}>
                        <div
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                height: '100%',
                                width: '0%',
                                backgroundColor: '#1db954',
                                borderRadius: '9999px',
                                transition: 'width 0.1s linear'
                            }}
                        />
                    </div>

                    <div className="default playlist-time-section">
                        <div className="default playlist-time-start">0:00</div>
                        <div className="default playlist-time-end">
                            {Math.floor(currentTrack.duration_ms / 60000)}:{String(Math.floor((currentTrack.duration_ms % 60000) / 1000)).padStart(2, '0')}
                        </div>
                    </div>
                </div>

                <div className="default playlist-controls-section">
                    <svg
                        onClick={previousTrack}
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        className="bi bi-skip-backward-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5" />
                    </svg>

                    {isPlaying ? (
                        <svg
                            onClick={togglePlayPause}
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            fill="currentColor"
                            className="bi bi-pause-circle-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5" />
                        </svg>
                    ) : (
                        <svg
                            onClick={togglePlayPause}
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            fill="currentColor"
                            className="bi bi-play-circle-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                        </svg>
                    )}

                    <svg
                        onClick={nextTrack}
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        className="bi bi-skip-forward-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5" />
                    </svg>
                </div>

                <div className="default playlist-footer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" stroke="currentColor" strokeWidth={0.4} className="bi bi-laptop" viewBox="0 0 16 16">
                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" stroke="currentColor" strokeWidth={0.4} className="bi bi-upload" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                    </svg>
                </div>
            </div>
        </>
    );
}