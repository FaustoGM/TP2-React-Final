import { useState } from "react";
import "../styles/css/contacto.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      setErrors({
        ...errors,
        email: !value.includes('@') ? 'Ingresa un email válido' : ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mnqelrkd", {
        method: "POST",
        body: new FormData(e.target),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        e.target.reset();
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contacto</h2>
        <p className="contact-subtitle">
          ¿Querés contactarme? Completá el formulario
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
          
          <textarea
            name="message"
            rows="5"
            placeholder="Escribí tu mensaje..."
            required
            value={formData.message}
            onChange={handleChange}
          />
          
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="spinner">⌛</span>
            ) : (
              'Enviar'
            )}
          </button>
        </form>

        {formStatus === "success" && (
          <p className="form-message success">✅ ¡Mensaje enviado con éxito!</p>
        )}
        {formStatus === "error" && (
          <p className="form-message error">❌ Ocurrió un error. Probá más tarde.</p>
        )}
      </div>
    </section>
  );
};

export default Contact;