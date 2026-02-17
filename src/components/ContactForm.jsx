import React, { useState } from 'react';
import {
    PaperPlaneRight,
    CheckCircle,
    User,
    EnvelopeSimple,
} from '@phosphor-icons/react';

const ContactForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: [],
        budget: '',
        message: '',
    });

    const toggleService = (service) => {
        setFormData((prev) => ({
            ...prev,
            service: prev.service.includes(service)
                ? prev.service.filter((s) => s !== service)
                : [...prev.service, service],
        }));
    };

    const nextStep = () => setStep((s) => s + 1);
    const prevStep = () => setStep((s) => s - 1);

    const WHATSAPP_NUMBER = '584269599721';

    const handleSubmit = (e) => {
        e.preventDefault();
        const lines = [
            `Hola, soy *${formData.name || 'Cliente'}*`,
            formData.email ? `📧 ${formData.email}` : '',
            formData.service.length ? `🔧 Servicios: ${formData.service.join(', ')}` : '',
            formData.budget ? `💰 Presupuesto: ${formData.budget}` : '',
            formData.message ? `\n📝 ${formData.message}` : '',
            '\n_Enviado desde shamvita.com_',
        ].filter(Boolean).join('\n');
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="section animate-fade-up">
            <div className="container max-w-2xl mx-auto">
                <div
                    style={{
                        background: 'var(--color-surface)',
                        borderRadius: '24px',
                        padding: '40px',
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)',
                        border: '1px solid var(--color-border-light)',
                    }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <h2
                            style={{
                                fontSize: '28px',
                                fontWeight: 700,
                                marginBottom: '8px',
                            }}
                        >
                            Empecemos tu Proyecto
                        </h2>
                        <p style={{ color: 'var(--color-text-secondary)' }}>
                            Paso {step} de 3
                        </p>
                        {/* Progress Bar */}
                        <div
                            style={{
                                width: '100%',
                                height: '4px',
                                background: 'var(--color-border-light)',
                                borderRadius: '2px',
                                marginTop: '16px',
                                overflow: 'hidden',
                            }}
                        >
                            <div
                                style={{
                                    height: '100%',
                                    width: `${(step / 3) * 100}%`,
                                    background: 'var(--color-brand)',
                                    transition: 'width 0.3s ease',
                                }}
                            />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {step === 1 && (
                            <div className="animate-fade-in flex flex-col gap-6">
                                <FormField label="Tu Nombre" icon={<User />}>
                                    <input
                                        type="text"
                                        placeholder="Ej. Ana García"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                        autoFocus
                                    />
                                </FormField>
                                <FormField
                                    label="Tu correo electrónico"
                                    icon={<EnvelopeSimple />}
                                >
                                    <input
                                        type="email"
                                        placeholder="ana@empresa.com"
                                        className="form-input"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </FormField>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="animate-fade-in flex flex-col gap-8">
                                <div>
                                    <label className="form-label mb-3 block">
                                        ¿Qué necesitas?
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            'POS / ERP',
                                            'App Móvil',
                                            'E-commerce',
                                            'Web App',
                                            'Consultoría',
                                            'Otro',
                                        ].map((opt) => (
                                            <OptionButton
                                                key={opt}
                                                label={opt}
                                                selected={formData.service.includes(
                                                    opt
                                                )}
                                                onClick={() =>
                                                    toggleService(opt)
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="form-label mb-3 block">
                                        Rango de Presupuesto
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            '$1k - $3k',
                                            '$3k - $8k',
                                            '$8k - $15k',
                                            '+$15k',
                                        ].map((opt) => (
                                            <OptionButton
                                                key={opt}
                                                label={opt}
                                                selected={
                                                    formData.budget === opt
                                                }
                                                onClick={() =>
                                                    setFormData({
                                                        ...formData,
                                                        budget: opt,
                                                    })
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="animate-fade-in flex flex-col gap-6">
                                <FormField label="Cuéntanos más sobre el proyecto">
                                    <textarea
                                        rows="4"
                                        placeholder="Detalles clave, objetivos, plazos..."
                                        className="form-input"
                                        style={{ resize: 'none' }}
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                message: e.target.value,
                                            })
                                        }
                                        autoFocus
                                    />
                                </FormField>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: '40px',
                            }}
                        >
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="btn-text"
                                    style={{
                                        color: 'var(--color-text-secondary)',
                                        background: 'transparent',
                                        border: 'none',
                                        padding: '12px 24px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Atrás
                                </button>
                            ) : (
                                <div />
                            )}

                            {step < 3 ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="btn-primary"
                                >
                                    Siguiente
                                    <CheckCircle size={18} weight="bold" />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="btn-primary"
                                    style={{
                                        boxShadow:
                                            '0 4px 15px rgba(163,106,243,0.3)',
                                    }}
                                >
                                    Enviar Solicitud
                                    <PaperPlaneRight size={18} weight="fill" />
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            <style>{`
        .form-label {
          font-weight: 600;
          color: var(--color-text-primary);
          font-size: 15px;
        }
        .form-input {
          width: 100%;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid var(--color-border);
          font-family: inherit;
          font-size: 16px;
          outline: none;
          transition: all 0.2s;
          background: var(--color-surface-elevated);
        }
        .form-input:focus {
          border-color: var(--color-brand);
          box-shadow: 0 0 0 4px var(--color-brand-light);
        }
      `}</style>
        </div>
    );
};

const FormField = ({ label, children, icon }) => (
    <div>
        <label className="form-label mb-2 flex items-center gap-2">
            {icon &&
                React.cloneElement(icon, {
                    size: 18,
                    color: 'var(--color-text-secondary)',
                })}
            {label}
        </label>
        {children}
    </div>
);

const OptionButton = ({ label, selected, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        style={{
            padding: '14px',
            borderRadius: '12px',
            border: `1.5px solid ${selected ? 'var(--color-brand)' : 'var(--color-border-light)'}`,
            background: selected
                ? 'var(--color-brand-light)'
                : 'var(--color-surface)',
            color: selected
                ? 'var(--color-brand)'
                : 'var(--color-text-secondary)',
            fontWeight: selected ? 700 : 500,
            cursor: 'pointer',
            transition: 'all 0.2s',
            textAlign: 'center',
            fontSize: '14px',
        }}
    >
        {label}
    </button>
);

export default ContactForm;
