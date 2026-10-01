'use client';

import { useState } from 'react';

export function ShareStory() {
  const [message, setMessage] = useState('');
  const [fallback, setFallback] = useState('');
  async function copyLink() {
    const url = `${window.location.origin}/our-story`;
    try {
      await navigator.clipboard.writeText(url);
      setMessage('Story link copied. Ready to share.');
      setFallback('');
    } catch {
      setFallback(url);
      setMessage('Select and copy the story link below.');
    }
  }
  return <div className="share-control"><button className="button button-primary" type="button" onClick={copyLink}>Copy the story link <span aria-hidden="true">↗</span></button><p aria-live="polite" className="share-status">{message}</p>{fallback && <label className="share-fallback">Story link<input readOnly value={fallback} onFocus={event => event.currentTarget.select()} /></label>}</div>;
}
