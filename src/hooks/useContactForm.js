import { useCallback, useEffect, useRef, useState } from "react";

const getInitialFormData = ({ search, modelOptions }) => {
  const params = new URLSearchParams(search);
  const modelParam = params.get("model");
  const notesParam = params.get("notes");

  const defaultModel = modelOptions[0]?.id ?? "";
  const resolvedModel =
    modelParam && modelOptions.some((car) => car.id === modelParam)
      ? modelParam
      : defaultModel;

  return {
    name: "",
    model: resolvedModel,
    contact: "email",
    location: "",
    color: "Red",
    payment: "Cash",
    email: "",
    phone: "",
    notes: notesParam ? notesParam : "",
  };
};

export const useContactForm = ({ search, modelOptions }) => {
  const timeoutRef = useRef(null);

  const [formData, setFormData] = useState(() =>
    getInitialFormData({ search, modelOptions }),
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setIsSubmitted(false);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      setIsSubmitting(true);
      setIsSubmitted(true);

      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setIsSubmitted(false);
        setIsSubmitting(false);
      }, 1000);
    },
    [setIsSubmitting, setIsSubmitted],
  );

  useEffect(() => {
    return () => {
      if (!timeoutRef.current) return;
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    formData,
    isSubmitted,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

