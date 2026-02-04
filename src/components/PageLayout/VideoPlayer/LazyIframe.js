const LazyIframe = ({ videoId }) => (
    <iframe
        width="640" 
        height="390" 
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allowFullScreen
        className="rounded-lg w-full h-full"

        >
    </iframe>
);

export default LazyIframe;
