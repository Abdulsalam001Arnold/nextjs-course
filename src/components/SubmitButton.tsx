'use client'
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
    text: string;
    loadingText: string;
}

export default function SubmitButton({text, loadingText}: SubmitButtonProps) {
    const { pending } = useFormStatus();

    return(
        <button type="submit" className="w-full"
        disabled={pending}
        >
            {pending ? loadingText : text}
        </button>
    )
};
