import { useState, useRef, useEffect } from "react";
import { emailService } from "../../../services/EmailService";
import { FormData } from "../../../dto/Email.dto";

export const useContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const isMountedRef = useRef(true);

    useEffect(() => {
        return () => {
            isMountedRef.current = false;
        };
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields");
            return;
        }
        try {
            setIsSubmitting(true);
            await emailService(formData);
            if (isMountedRef.current) {
                setFormData({ name: "", email: "", message: "" });
            }
        } catch (error) {
            // alerts handled in emailService
        } finally {
            if (isMountedRef.current) {
                setIsSubmitting(false);
            }
        }
    };

    return { formData, isSubmitting, handleInputChange, handleSubmit };
};