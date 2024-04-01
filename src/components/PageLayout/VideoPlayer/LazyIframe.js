const LazyIframe = ({ videoId }) => (
    <iframe
        width="640" 
        height="390" 
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allowFullScreen>
    </iframe>
);

export default LazyIframe;
