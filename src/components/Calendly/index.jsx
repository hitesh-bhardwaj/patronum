import { PopupModal } from "react-calendly";

export default function Calendly({isOpen, setIsOpen }) {
    
    return (
        <>
            <PopupModal
                url="https://calendly.com/bespinlabs/60-minutes?primary_color=3d92c4&month=2024-06"
                onModalClose={() => setIsOpen(false)}
                open={isOpen}
                rootElement={document.getElementById("footer")}
            />
        </>
    )
}