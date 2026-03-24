const companyTypes = ["E-commerce", "Import/Export", "SaaS", "Logistics", "Professional Services", "Marketplaces", "Manufacturing", "Wholesale"];

function App() {
  return (
    <div className="site">
      <header className="hero" id="about">
        <div className="container topbar">
          <div className="brand">
            <img className="brand-logo" src="/images/glocash-logo.png" alt="Glocash Payment HK Limited logo" />
            <span>Glocash Payment HK Limited</span>
          </div>
          <nav className="menu">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contacts">Contacts</a>
          </nav>
        </div>

        <div className="container hero-wrap">
          <div className="hero-left">
            <h1>Licensed Money Service Operator for global business payments</h1>
            <p className="lead">
              Send, receive, and convert funds in major currencies with clear pricing and compliant
              settlement routes.
            </p>
            <a href="#contacts" className="button-primary">
              Submit a request
            </a>
          </div>

          <div className="hero-right">
            <p className="hero-tag">About us</p>
            <h3>Cross-border payment operations built for regulated business use</h3>
            <p className="hero-note">
              We combine onboarding, compliance checks, treasury operations, and payment execution in
              one managed service.
            </p>
            <ul className="hero-points">
              <li>Multi-currency payments in 50+ corridors</li>
              <li>Settlement windows from same day to T+2</li>
              <li>Transparent fees and pre-trade FX quotes</li>
            </ul>
            <a href="#services" className="hero-link">
              View services
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section container" id="services">
          <h2>Core Services</h2>
          <div className="service-grid">
            <article className="panel">
              <h3>International Payouts</h3>
              <p>
                Execute supplier and contractor payments in major currencies with payment tracking,
                confirmation documents, and dedicated support.
              </p>
            </article>
            <article className="panel">
              <h3>Collections and Reconciliation</h3>
              <p>
                Receive funds from customers across supported regions, then settle to your operating
                account with clear reconciliation reports.
              </p>
            </article>
          </div>
        </section>

        <section className="section section-light">
          <div className="container">
            <h2>Coverage</h2>
            <img className="geo-image" src="/images/map-mask.png" alt="Global payment map" />
            <div className="metrics-grid">
              <article className="metric">
                <img src="/images/icon-mobile-banking.png" alt="" aria-hidden="true" />
                <h3>Global partner network</h3>
                <p>
                  Licensed and regulated counterparties enable reliable routing and predictable
                  settlement timelines.
                </p>
              </article>
              <article className="metric">
                <img src="/images/icon-financial-security.png" alt="" aria-hidden="true" />
                <h3>Same-day and next-day processing</h3>
                <p>
                  Priority corridors can be processed on the same business day, with standard routes
                  completed by T+1 or T+2.
                </p>
              </article>
              <article className="metric">
                <h3>Pre-trade FX pricing</h3>
                <p>
                  Lock your exchange rate before execution to manage currency risk and control total
                  payment cost.
                </p>
              </article>
              <article className="metric">
                <h3>Compliance-first operations</h3>
                <p>
                  KYC, KYB, sanctions screening, transaction monitoring, and recordkeeping are
                  embedded into every payment workflow.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section container">
          <h2>Industries We Support</h2>
          <div className="type-grid">
            {companyTypes.map((type) => (
              <div key={type} className="type-card">
                {type}
              </div>
            ))}
          </div>
        </section>

        <section className="section section-dark" id="how">
          <div className="container">
            <h2>How It Works</h2>
            <p className="scheme-intro">
              A standard onboarding and execution flow keeps every transaction compliant and auditable.
            </p>
            <div className="timeline">
              <article>
                <strong>01 | ONBOARDING</strong>
                <p>Submit company details and required compliance documents for account activation.</p>
              </article>
              <article>
                <strong>02 | QUOTE</strong>
                <p>
                  Receive a payment quote with fees, FX rate, settlement timeline, and required
                  payment purpose details.
                </p>
              </article>
              <article>
                <strong>03 | EXECUTION</strong>
                <p>Fund the transaction and we execute payout through the optimal regulated corridor.</p>
              </article>
              <article>
                <strong>04 | REPORTING</strong>
                <p>Get payment confirmations, settlement statements, and transaction reports for audit.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section container">
          <blockquote className="quote">
            We provide reliable cross-border money movement with compliance, transparency, and
            operational control.
          </blockquote>
          <ul className="values">
            <li>Regulatory compliance and transaction security come first.</li>
            <li>Service levels and pricing are defined in advance.</li>
            <li>Each client has a dedicated operations manager.</li>
          </ul>
        </section>

        <section className="section section-dark" id="contacts">
          <div className="container contact-wrap">
            <div>
              <h2>Request a Consultation</h2>
              <p>Share your payment volume, corridors, and currencies.</p>
              <p>
                Phone: <a href="tel:+85292992196">+852 9299 2196</a>
              </p>
              <p>
                Email: <a href="mailto:leon.feng@gcashier.com">leon.feng@gcashier.com</a>
              </p>
            </div>
            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
              <textarea rows="3" placeholder="Message..." />
              <label className="checkbox">
                <input type="checkbox" defaultChecked />
                <span>I agree to data processing and compliance review</span>
              </label>
              <button className="button-primary" type="submit">
                Send
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            Phone: <a href="tel:+85292992196">+852 9299 2196</a>
          </p>
          <p>
            Email: <a href="mailto:leon.feng@gcashier.com">leon.feng@gcashier.com</a>
          </p>
          <p>Money Service Operator for global business payments</p>
          <p>
            Service is provided by Bangkok Export Line Co., Ltd. Address: 11/2 P23 Building, Level
            11, Soi Sukhumvit 23, Sukhumvit Road, North Klongtoey, Wattana, Bangkok, Thailand
            10110. Company reg. no: 0105567217543.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
