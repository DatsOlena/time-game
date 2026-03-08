import { forwardRef, useRef, useImperativeHandle } from 'react';

export default forwardRef(function ResultModal({ targetTime, timeRemaining, onReset }, ref) {

    const dialog = useRef();

    const userLost = timeRemaining <= 0;
    const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            }
        }
    });

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>You {userLost ? 'lost' : 'won'}</h2>
            <p>The target time was {targetTime} seconds</p>
            <p>You stopped the timer with <strong>{formattedTimeRemaining} seconds left</strong></p>
            <form method="dialog"
                onSubmit={onReset}
            >
                <button>Close</button>
            </form>
        </dialog>
    );
});