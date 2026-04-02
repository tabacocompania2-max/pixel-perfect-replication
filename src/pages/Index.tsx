import { useState, useCallback, useEffect } from "react";

const CHECKOUT_URL = "https://pay.hotmart.com/K104296010G?checkoutMode=10";

const scrollToCheckout = () => {
  window.location.href = CHECKOUT_URL;
};

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const playVideo = useCallback((src: string) => {
    setVideoSrc(src);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeVideo = useCallback(() => {
    setModalOpen(false);
    setVideoSrc("");
    document.body.style.overflow = "auto";
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Announcement Banner */}
      <div className="announcement-banner">
        🔥 Inscripciones abiertas por tiempo limitado
      </div>

      {/* Top Bar */}
      <div className="topbar">
        <div className="lp-container">
          <div className="topbar-content">
            <div className="logo">Lectoescritura</div>
            <ul className="nav-links">
              <li><a href="#metodo" onClick={(e) => handleSmoothScroll(e, "#metodo")}>Método</a></li>
              <li><a href="#niveles" onClick={(e) => handleSmoothScroll(e, "#niveles")}>6 Niveles</a></li>
              <li><a href="#testimonios" onClick={(e) => handleSmoothScroll(e, "#testimonios")}>Testimonios</a></li>
              <li><a href="#garantia" onClick={(e) => handleSmoothScroll(e, "#garantia")}>Garantía</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="lp-container">
          <div className="hero-content">
            <h1>
              Si tu hijo tiene de 4 a 7 años y aún no lee, <span className="highlight">esto ya es una señal de alerta</span>
            </h1>

            <p className="hero-subtitle">
              Porque cada día que pasa sin leer, pierde confianza… <strong>y tú lo estás viendo</strong>
            </p>

            <div className="hero-stat">
              <strong>✓ No es que no pueda. Es que nadie le está enseñando bien.</strong>
            </div>

            <p className="hero-subtitle">
              Esto es un <strong>programa completo de lectoescritura para usar en casa</strong>, con el que tu hijo puede empezar a leer siguiendo un plan diario de 15 minutos.
            </p>

            <div className="hero-stat">
              ✅ Resultados visibles en solo 30 días usando el plan incluido<br />
              <small>Basado en un sistema progresivo de 6 niveles que lleva a tu hijo desde no reconocer letras hasta leer frases completas — sin frustración.</small>
            </div>

            <ul className="hero-bullets">
              <li><span className="check-icon">✓</span> No necesitas ser maestro</li>
              <li><span className="check-icon">✓</span> Solo 10–15 minutos al día</li>
              <li><span className="check-icon">✓</span> Más de 2,500 familias ya lo usan</li>
            </ul>

            <img
              src="/83db4a78-19c6-433b-abe7-799bb3ae3836.webp"
              alt="Programa de lectoescritura para niños"
              className="hero-image"
            />

            <div className="price-box">
              <div className="price">$7.99</div>
              <div className="price-subtitle">Menos que una clase particular</div>
              <button className="lp-btn lp-btn-primary price-cta" onClick={() => scrollToSection("metodo")}>
                Quiero ayudar a mi hijo hoy →
              </button>
              <div className="price-guarantees">
                <div className="guarantee-item">⚡ Acceso inmediato</div>
                <div className="guarantee-item">🛡️ Garantía 7 días</div>
                <div className="guarantee-item">🔒 Pago seguro</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="section-pain">
        <div className="lp-container">
          <h2>¿RECONOCES ESTA SITUACIÓN?<br /><span className="highlight">Necesitas actuar ahora</span></h2>

          <ul className="pain-list">
            <li><span className="alert-icon">!</span><span>Tu hijo dice "no puedo"</span></li>
            <li><span className="alert-icon">!</span><span>Se frustra o evita leer</span></li>
            <li><span className="alert-icon">!</span><span>Otros niños ya están avanzando</span></li>
            <li><span className="alert-icon">!</span><span>Sientes que no sabes cómo ayudarlo</span></li>
          </ul>

          <p style={{ color: "var(--lp-text-secondary)", marginBottom: "1rem" }}>
            <strong style={{ color: "var(--lp-text-primary)" }}>La verdad dura:</strong> Esto no mejora solo… y el tiempo sigue pasando.
          </p>

          <button className="lp-btn lp-btn-primary" onClick={() => scrollToSection("testimonios")}>
            No quiero que siga atrasándose →
          </button>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-solution">
        <div className="lp-container">
          <div className="solution-content">
            <h2>El problema no es tu hijo. <span className="highlight">Es el método.</span></h2>
            <p style={{ color: "var(--lp-text-secondary)", marginBottom: "1rem" }}>
              No necesita más apps ni videos. Necesita un <strong>sistema claro, paso a paso</strong>, diseñado para que tú puedas enseñarle desde casa.
            </p>
            <p style={{ color: "var(--lp-primary)", fontWeight: 600 }}>
              Y eso es exactamente lo que incluye este programa.
            </p>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="section-why" id="metodo">
        <div className="lp-container">
          <h2>¿POR QUÉ FUNCIONA EN 30 DÍAS?<br /><span style={{ color: "var(--lp-text-secondary)", fontSize: "1rem", fontWeight: 400 }}>(Cuando otros métodos toman meses)</span></h2>

          <div className="why-intro">
            <p>
              La mayoría de métodos fallan porque enseñan letras sueltas, sin sistema progresivo claro, y sin refuerzo diario constante. Nuestro método funciona porque está basado en ciencia y progresa paso a paso.
            </p>
          </div>

          <div className="why-content">
            <div className="why-science">
              <h3>📊 Basado en Ciencia</h3>
              <ul>
                <li>Reconocimiento visual de patrones (no memorización)</li>
                <li>Construcción de sílabas antes de palabras</li>
                <li>Refuerzo diario por 30 días (memoria espaciada)</li>
                <li>Sin frustración, con celebración de cada logro</li>
              </ul>
            </div>

            <div className="why-science">
              <h3>⚡ Estrategia Probada</h3>
              <ul>
                <li>15 minutos diarios es el tiempo óptimo</li>
                <li>Fichas listas para imprimir (sin preparación)</li>
                <li>Plan exacto para cada día incluido</li>
                <li>2,500+ familias han visto resultados</li>
              </ul>
            </div>
          </div>

          <h3 style={{ textAlign: "center", marginTop: "3rem", marginBottom: "2rem", fontSize: "1.25rem" }}>🎯 Sistema de 6 Niveles Progresivos</h3>

          <div className="levels-container" id="niveles">
            {[
              { title: "NIVEL 1: Reconocimiento Visual", time: "Días 1-5", content: "Tu hijo aprende a reconocer y diferenciar las 5 vocales (A, E, I, O, U) a través de actividades interactivas.", result: "✅ RESULTADO: Reconoce y escribe todas las vocales" },
              { title: "NIVEL 2: Consonantes Básicas", time: "Días 6-10", content: "Introducción de primeras 6 consonantes (M, P, S, L, T, N). Combinación de vocales + consonantes para formar sílabas simples.", result: "✅ RESULTADO: Lee y forma sus primeras sílabas (ma, me, mi, pa, pe, etc.)" },
              { title: "NIVEL 3: Sílabas Complejas", time: "Días 11-15", content: "Agregar más consonantes y sílabas complejas. Comenzar a formar palabras de 2 sílabas.", result: "✅ RESULTADO: Lee palabras completas simples (sol, mesa, gato, etc.)" },
              { title: "NIVEL 4: Palabras y Oraciones", time: "Días 16-20", content: "Construcción de oraciones cortas. Lectura comprensiva básica. Conectar lectura con significado.", result: "✅ RESULTADO: Lee y entiende oraciones de 3-5 palabras" },
              { title: "NIVEL 5: Fluidez y Comprensión", time: "Días 21-25", content: "Aumentar velocidad de lectura. Comprensión más profunda. Lectura más independiente.", result: "✅ RESULTADO: Lee párrafos completos con velocidad natural" },
              { title: "NIVEL 6: Consolidación y Libertad", time: "Días 26-30", content: "Mantener y expandir vocabulario. Transición a lectura libre. Confianza total del niño.", result: "✅ RESULTADO: Lectura independiente, fluida y con confianza" },
            ].map((level, i) => (
              <div className="level" key={i}>
                <div className="level-header">
                  <span className="level-title">{level.title}</span>
                  <span className="level-time">{level.time}</span>
                </div>
                <div className="level-content">{level.content}</div>
                <div className="level-result">{level.result}</div>
              </div>
            ))}
          </div>

          <h3 style={{ textAlign: "center", marginTop: "3rem", marginBottom: "1.5rem", fontSize: "1.25rem" }}>📊 Comparación: Nuestro Método vs Alternativas</h3>

          <table className="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th>Nuestro Programa</th>
                <th>Clases Particulares</th>
                <th>Apps/Videos</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Estructura clara</strong></td><td><span className="check">✓ Sí</span></td><td>⚠️ Variable</td><td><span className="cross">✗ Caótica</span></td></tr>
              <tr><td><strong>Progreso medible</strong></td><td><span className="check">✓ Sí</span></td><td><span className="check">✓ Sí</span></td><td><span className="cross">✗ Vago</span></td></tr>
              <tr><td><strong>Tiempo diario</strong></td><td>15 minutos</td><td>60+ minutos</td><td>Indefinido</td></tr>
              <tr><td><strong>Costo</strong></td><td><span className="check">$7.99</span></td><td>$300-500/mes</td><td>$20-50/mes</td></tr>
              <tr><td><strong>Acceso 24/7</strong></td><td><span className="check">✓ Sí</span></td><td><span className="cross">✗ Horarios</span></td><td><span className="check">✓ Sí</span></td></tr>
              <tr><td><strong>Validado por expertos</strong></td><td><span className="check">✓ Sí</span></td><td><span className="check">✓ Sí</span></td><td><span className="cross">✗ No</span></td></tr>
              <tr><td><strong>Funciona para todos</strong></td><td><span className="check">✓ Sí</span></td><td><span className="check">✓ Sí</span></td><td>⚠️ No a todos</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-how">
        <div className="lp-container">
          <h2>Así funciona <span style={{ color: "var(--lp-text-secondary)" }}>(sin complicaciones)</span></h2>

          <div className="steps-grid">
            <div className="step">
              <div className="step-icon">📥</div>
              <div className="step-number">1</div>
              <div className="step-title">Descarga e imprime</div>
            </div>
            <div className="step">
              <div className="step-icon">📖</div>
              <div className="step-number">2</div>
              <div className="step-title">15 minutos al día</div>
            </div>
            <div className="step">
              <div className="step-icon">🏆</div>
              <div className="step-number">3</div>
              <div className="step-title">Empieza a leer en semanas</div>
            </div>
          </div>

          <p style={{ textAlign: "center", color: "var(--lp-text-secondary)", marginTop: "1.5rem" }}>
            Sin presión. Sin estrés. Sin improvisar.
          </p>
        </div>
      </section>

      {/* Videos */}
      <section className="section-videos">
        <div className="lp-container">
          <h2>Mira el método en acción</h2>
          <p className="videos-subtitle">Familias reales usando el programa con sus hijos. Resultados comprobados.</p>

          <div className="videos-grid">
            <div className="video-card">
              <div className="video-thumbnail" style={{ backgroundImage: "url('https://i.vimeocdn.com/video/2139349074-045ce919fdaa5480d392d8d3ac62cc41fbf4ea76d2e71552897311ff18b10af0-d_640?region=us')", backgroundSize: "cover", backgroundPosition: "center" }} onClick={() => playVideo("https://player.vimeo.com/video/1177900310?autoplay=1")}>
                <div className="play-button">▶</div>
              </div>
              <div className="video-caption">Padres e hijos practicando juntos — en pocos minutos al día, los avances son reales.</div>
            </div>

            <div className="video-card">
              <div className="video-thumbnail" style={{ backgroundImage: "url('https://i.vimeocdn.com/video/2139349494-7d73d8d4017b22326172a67e4fb063c99a1a28ff7ca329e22a0f85b35f2da74c-d_640?region=us')", backgroundSize: "cover", backgroundPosition: "center" }} onClick={() => playVideo("https://player.vimeo.com/video/1177900287?autoplay=1")}>
                <div className="play-button">▶</div>
              </div>
              <div className="video-caption">Resultados reales — mira el progreso después de usar el programa.</div>
            </div>
          </div>

          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <h3 style={{ marginBottom: "1rem" }}>Mira por dentro exactamente cómo funciona</h3>
            <div className="video-card" style={{ maxWidth: "600px", margin: "0 auto" }}>
              <div className="video-thumbnail" style={{ backgroundImage: "url('/video-thumb-3.png')", backgroundSize: "cover", backgroundPosition: "center" }} onClick={() => playVideo("https://player.vimeo.com/video/1177912788?autoplay=1")}>
                <div className="play-button">▶</div>
              </div>
              <div className="video-caption">Video completo del ebook — todas las fichas, plan de 30 días y sistema de seguimiento incluido.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="section-bonus">
        <div className="lp-container">
          <div className="bonus-header">🎁 INCLUIDO GRATIS</div>
          <h2>Además, hoy recibes GRATIS</h2>

          <div className="bonus-grid">
            {[
              { title: "Actividades de refuerzo", image: "/bonus-1-actividades.png" },
              { title: "Plan de 30 días", image: "/bonus-2-plan30dias.webp" },
              { title: "Seguimiento de progreso", image: "/bonus-3-planillas.webp" },
              { title: "Diploma editable", image: "/bonus-4-diploma.webp" },
            ].map((bonus, i) => (
              <div className="bonus-card" key={i}>
                <div className="bonus-image" style={bonus.image ? { backgroundImage: `url('${bonus.image}')` } : {}}></div>
                <div className="bonus-title-text">{bonus.title}</div>
              </div>
            ))}
          </div>

          <p style={{ color: "var(--lp-text-secondary)", marginTop: "1.5rem" }}>
            Esto elimina las excusas. <strong style={{ color: "var(--lp-text-primary)" }}>Solo tienes que seguir el plan.</strong>
          </p>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="section-credibility">
        <div className="lp-container">
          <div className="credibility-card">
            <div className="credibility-avatar">👨‍🏫</div>
            <div className="credibility-name">Creado por [Tu Nombre]</div>
            <div className="credibility-title">Logopeda Certificado | Especialista en Lectoescritura</div>

            <div className="credibility-stats">
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Años de experiencia</div>
              </div>
              <div className="stat">
                <div className="stat-number">2,500+</div>
                <div className="stat-label">Familias ayudadas</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Tasa de éxito</div>
              </div>
            </div>

            <div className="credibility-quote">
              "Después de 15 años viendo el mismo problema una y otra vez, creé este programa para que cualquier padre pudiera hacer lo que yo hago en consultorios costosos. Si tu hijo puede leer después de seguir esto, yo tengo la culpa. Si no puede, te devuelvo cada peso."
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-testimonials" id="testimonios">
        <div className="lp-container">
          <h2>Resultados Reales de Familias</h2>

          <div className="testimonials-grid">
            {[
              { before: "Mateo no reconocía ni una sola vocal. Se frustraba y lloraba cada vez que intentábamos enseñarle.", after: "En un mes, Mateo lee párrafos completos de su libro favorito. La confianza cambió completamente. Ahora dice \"yo puedo\" en lugar de \"no puedo\".", afterLabel: "Después (30 días):", author: "Carolina M. — Bogotá, Colombia" },
              { before: "Sofía tenía 6 años. Probamos 3 apps diferentes, clases online, hasta contratar una tutora. Nada funcionaba. Gastábamos $400/mes en tutorías sin resultados.", after: "En la primera semana vi cambio. En 40 días, Sofía lee sin ayuda. La tutora dice que debería estar enseñando más arriba. Ahorré $1,600 en tutorías, y el resultado es MEJOR.", afterLabel: "Después (40 días):", author: "Daniela R. — Guayaquil, Ecuador" },
              { before: "Diego tenía 6.2 años, diagnóstico de \"atraso lector\". Los especialistas decían que \"necesitaría años\". Nos recomendaban ir \"lentito, sin presión\".", after: "No es magia. Simplemente, el método FUNCIONA. Diego hoy está al nivel de niños de 7 años. Los especialistas están confundidos sobre cómo pasó tan rápido. Para nosotros es simple: tuvimos CLARIDAD.", afterLabel: "Después (35 días):", author: "Pablo V. — Lima, Perú" },
              { before: "Lucas se aburría con todo. Decía que la lectura \"era para chicas\" y se rehusaba a intentar. A los 6 años, ni siquiera reconocía las letras.", after: "El programa hizo que la lectura fuera un JUEGO. Lucas pide practicar. Ahora escribe historias cortas por su cuenta. No puedo creer el cambio de actitud.", afterLabel: "Después (45 días):", author: "María L. — Medellín, Colombia" },
              { before: "Valeria era muy tímida. No participaba en clase. Los maestros decían que estaba \"retrasada\". Esto afectaba su autoestima.", after: "Ahora Valeria es la primera en levantar la mano en clase. Lee en voz alta sin miedo. Los maestros están sorprendidos. Ella está CONFIADA.", afterLabel: "Después (50 días):", author: "Roberto S. — Santiago de Chile" },
              { before: "Alonso tenía 5.5 años. Estaba en el colegio pero claramente rezagado. No sabía ni las vocales. Nos sentimos como padres fracasados.", after: "Increíble. Solo 25 días. Alonso ahora LEE. Ya no es el niño rezagado de la clase. Pasó de llorar a SONREÍR. Nosotros como padres nos sentimos empoderados de nuevo.", afterLabel: "Después (25 días):", author: "Fernanda & José — Buenos Aires, Argentina" },
            ].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="stars">
                  {[...Array(5)].map((_, j) => (
                    <div className="star" key={j}>★</div>
                  ))}
                </div>
                <div className="testimonial-before">
                  <strong>Antes:</strong> {t.before}
                </div>
                <div className="testimonial-after">
                  <strong>{t.afterLabel}</strong> {t.after}
                </div>
                <div className="testimonial-author">{t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Stack - Hormozi Style */}
      <section className="section-value-stack">
        <div className="lp-container">
          <h2>Esto es TODO lo que recibes hoy</h2>
          <p className="value-stack-subtitle">Resumen completo de lo que incluye tu compra</p>

          <div className="value-stack-box">
            <div className="value-stack-item">
              <div className="value-stack-check">✅</div>
              <div className="value-stack-details">
                <span className="value-stack-name">Programa completo de Lectoescritura (6 niveles)</span>
                <span className="value-stack-desc">El sistema paso a paso para que tu hijo lea en 30 días</span>
              </div>
              <span className="value-stack-price">$47</span>
            </div>

            <div className="value-stack-item">
              <div className="value-stack-check">✅</div>
              <div className="value-stack-details">
                <span className="value-stack-name">🎁 BONO: Actividades de refuerzo</span>
                <span className="value-stack-desc">Ejercicios extra para consolidar cada nivel</span>
              </div>
              <span className="value-stack-price">$15</span>
            </div>

            <div className="value-stack-item">
              <div className="value-stack-check">✅</div>
              <div className="value-stack-details">
                <span className="value-stack-name">🎁 BONO: Plan de 30 días</span>
                <span className="value-stack-desc">Exactamente qué hacer cada día, sin improvisar</span>
              </div>
              <span className="value-stack-price">$20</span>
            </div>

            <div className="value-stack-item">
              <div className="value-stack-check">✅</div>
              <div className="value-stack-details">
                <span className="value-stack-name">🎁 BONO: Planillas de seguimiento</span>
                <span className="value-stack-desc">Mide el progreso de tu hijo semana a semana</span>
              </div>
              <span className="value-stack-price">$10</span>
            </div>

            <div className="value-stack-item">
              <div className="value-stack-check">✅</div>
              <div className="value-stack-details">
                <span className="value-stack-name">🎁 BONO: Diploma editable</span>
                <span className="value-stack-desc">Celebra el logro de tu hijo con un diploma personalizado</span>
              </div>
              <span className="value-stack-price">$5</span>
            </div>

            <div className="value-stack-divider" />

            <div className="value-stack-total">
              <div>
                <span className="value-stack-total-label">Valor total: </span>
                <span className="value-stack-total-original">$97</span>
              </div>
              <div className="value-stack-today">
                <span>Hoy solo pagas: </span>
                <span className="value-stack-today-price">$7.99</span>
              </div>
            </div>

            <button className="lp-btn lp-btn-primary" onClick={() => scrollToSection("garantia")} style={{ width: "100%", marginTop: "1.5rem", fontSize: "1.1rem" }}>
              Quiero todo esto por solo $7.99 →
            </button>

            <div className="price-guarantees" style={{ marginTop: "1rem" }}>
              <div className="guarantee-item">⚡ Acceso inmediato</div>
              <div className="guarantee-item">🛡️ Garantía 7 días</div>
              <div className="guarantee-item">🔒 Pago seguro</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-guarantee" id="garantia">
        <div className="lp-container">
          <div className="guarantee-icon-large">🛡️</div>
          <h2>Pruébalo sin riesgo</h2>

          <div className="guarantee-content">
            <p style={{ color: "var(--lp-text-secondary)", marginBottom: "1.5rem" }}>
              Tienes <strong style={{ color: "var(--lp-text-primary)" }}>7 días para probarlo.</strong> Si después de 30 días siguiendo el programa tu hijo NO puede:
            </p>

            <ul style={{ listStyle: "none", textAlign: "left", color: "var(--lp-text-secondary)", marginBottom: "1.5rem", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>✓ Reconocer todas las letras del alfabeto</li>
              <li style={{ marginBottom: "0.5rem" }}>✓ Leer mínimo 15 palabras simples sin ayuda</li>
              <li style={{ marginBottom: "0.5rem" }}>✓ Escribir su nombre completo correctamente</li>
              <li style={{ marginBottom: "0.5rem" }}>✓ Mostrar CONFIANZA al leer (sin decir "no puedo")</li>
            </ul>

            <div className="guarantee-highlight">
              → Te devolvemos CADA PESO sin preguntas. Sin papeleo. Un click y listo.
            </div>

            <p style={{ color: "var(--lp-text-primary)", fontWeight: 600, marginTop: "1.5rem" }}>
              El único riesgo es NO hacer nada.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-final-cta">
        <div className="lp-container">
          <div className="final-cta-content">
            <div className="final-price">$7.99</div>
            <p style={{ color: "var(--lp-text-secondary)", marginBottom: "1rem" }}>Menos que una clase particular</p>

            <p style={{ color: "var(--lp-text-primary)", fontWeight: 600, marginBottom: "1rem" }}>
              Hoy todavía estás a tiempo de cambiar esto.
            </p>

            <div className="countdown">
              ⏰ Oferta disponible por tiempo limitado
            </div>

            <button className="lp-btn lp-btn-primary" onClick={scrollToCheckout} style={{ width: "100%", marginBottom: "1.5rem" }}>
              Quiero ayudar a mi hijo hoy →
            </button>

            <div className="price-guarantees">
              <div className="guarantee-item">⚡ Acceso inmediato</div>
              <div className="guarantee-item">🛡️ Garantía 7 días</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <div className={`video-modal ${modalOpen ? "active" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) closeVideo(); }}>
        <div className="video-modal-content">
          <button className="video-modal-close" onClick={closeVideo}>×</button>
          {videoSrc && <iframe src={videoSrc} allow="autoplay; fullscreen" title="Video" />}
        </div>
      </div>
    </>
  );
};

export default Index;
