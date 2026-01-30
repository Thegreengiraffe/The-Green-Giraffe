"use client";

import { useEffect, useState } from "react";

function AgeGate() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const ok = localStorage.getItem("gg_age_ok") === "true";
    if (ok) setOpen(false);
  }, []);

  function enterSite() {
    localStorage.setItem("gg_age_ok", "true");
    setOpen(false);
  }

  function leaveSite() {
    window.location.href = "https://www.google.com";
  }

  if (!open) return null;

  return (
    <div className="gate">
      <div className="gateBox" role="dialog" aria-modal="true" aria-labelledby="gateTitle">
        <div className="gateTop">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div className="mark" aria-hidden="true">🦒</div>
            <div>
              <h3 id="gateTitle">Age Verification</h3>
              <p>You must be 21+ to enter The Green Giraffe Dispensary website.</p>
            </div>
          </div>
        </div>
        <div className="gateBody">
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span className="pill">Minimal · Clean</span>
            <span className="pill">Lab-tested</span>
            <span className="pill">Nature-inspired</span>
          </div>
          <div className="gateActions">
            <button className="btn primary" onClick={enterSite}>Yes, I am 21+</button>
            <button className="btn" onClick={leaveSite}>No</button>
          </div>
          <div className="note">By entering, you confirm you meet your local legal age requirements.</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <AgeGate />

      <header>
        <div className="brand">
  <img
    src="/logo.png"
    alt="The Green Giraffe Dispensary Logo"
    style={{ height: 48, width: "auto" }}
  />
</div>

          <nav aria-label="Primary">
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#lab">Lab Reports</a>
            <a href="#shipping">Shipping</a>
            <a href="#returns">Returns</a>
            <a href="#contact">Contact</a>
            <a href="#blog">Blog</a>
          </nav>

          <div className="cta">
            <a className="btn" href="#contact">Contact</a>
            <a className="btn primary" href="#products">Shop</a>
          </div>
        </div>
      </header>

      <main>
        <div className="wrap hero">
          <div className="heroGrid">
            <div className="panel">
              <h1>Minimal wellness.<br />Naturally curated.</h1>
              <p className="sub">
                A clean, nature-inspired dispensary experience focused on transparency, lab testing, and premium selection.
              </p>

              <div className="pillRow">
                <div className="pill">Third-party lab reports</div>
                <div className="pill">Discreet shipping</div>
                <div className="pill">Adults 21+</div>
              </div>

              <div style={{ marginTop: 22, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a className="btn primary" href="#products">Browse Products</a>
                <a className="btn" href="#lab">View Lab Reports</a>
              </div>
            </div>

            <div className="panel" style={{
              background: "linear-gradient(180deg, rgba(79,127,106,.10), rgba(255,255,255,.65))"
            }}>
              <h2 style={{ marginBottom: 10 }}>Company</h2>
              <p className="hint" style={{ marginBottom: 14 }}>
                Store updates, releases, and educational content.
              </p>
              <div className="divider" />
              <p style={{ margin: 0, color: "var(--muted)", fontSize: 13 }}>Email</p>
              <a className="btn" href="mailto:hello@greengiraffenc.com" style={{ display: "inline-block", marginTop: 10 }}>
                hello@greengiraffenc.com
              </a>
              <div className="divider" />
              <p className="hint">Add your address + hours anytime.</p>
            </div>
          </div>
        </div>

        <section id="about">
          <div className="wrap">
            <div className="sectionTitle">
              <h2>About Us</h2>
              <p className="hint">Nature first · Clean standards · Transparent sourcing</p>
            </div>
            <div className="grid">
              <div className="card">
                <h3>Who we are</h3>
                <p>The Green Giraffe Dispensary is a modern, minimal space built around calm experiences and premium selection.</p>
              </div>
              <div className="card">
                <h3>Quality promise</h3>
                <p>We prioritize compliance and product clarity — lab reports, clean labels, and responsible guidance.</p>
              </div>
              <div className="card">
                <h3>Adult use 21+</h3>
                <p>This site is intended for adults who meet local legal age requirements.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="products">
          <div className="wrap">
            <div className="sectionTitle">
              <h2>Products</h2>
              <p className="hint">This layout is ready to add real items</p>
            </div>

            <div className="shopGrid">
              {[
                { tag: "Flower", title: "Curated Flower", desc: "Premium selection · Lab-tested" },
                { tag: "Edibles", title: "Gummies & Edibles", desc: "Consistent dosing · Clean ingredients" },
                { tag: "Vapes", title: "Vapes", desc: "Discreet · Smooth" },
                { tag: "Tinctures", title: "Tinctures", desc: "Simple formulas · Everyday use" },
              ].map((p) => (
                <div key={p.title} className="product">
                  <div className="thumb" />
                  <div className="productBody">
                    <span className="tag">{p.tag}</span>
                    <h4>{p.title}</h4>
                    <small>{p.desc}</small>
                  </div>
                </div>
              ))}
            </div>

            <p className="hint" style={{ marginTop: 14 }}>
              Want checkout? We can connect Shopify or Stripe later.
            </p>
          </div>
        </section>

        <section id="lab">
          <div className="wrap">
            <div className="sectionTitle">
              <h2>Lab Reports</h2>
              <p className="hint">Transparency you can verify</p>
            </div>
            <div className="grid">
              <div className="card">
                <h3>Third-party testing</h3>
                <p>Every product can include a COA link (PDF). Add them per product when ready.</p>
              </div>
              <div className="card">
                <h3>COA library</h3>
                <p>We can build a searchable “Lab Reports” page once you have files ready.</p>
              </div>
              <div className="card">
                <h3>Compliance</h3>
                <p>Clear documentation, labeling, and responsible product information.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="shipping">
          <div className="wrap">
            <div className="sectionTitle">
              <h2>Shipping & Delivery</h2>
              <p className="hint">Fast processing · Discreet packaging</p>
            </div>
            <div className="grid">
              <div className="card">
                <h3>Processing</h3>
                <p>Orders ship within 1–2 business days (edit to your real timeline).</p>
              </div>
              <div className="card">
                <h3>Discreet shipping</h3>
                <p>Plain packaging with privacy-friendly labeling wherever possible.</p>
              </div>
              <div className="card">
                <h3>Delivery options</h3>
                <p>Add local delivery / pickup details here if you offer them.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="returns">
          <div className="wrap">
            <div className="sectionTitle">
              <h2>Returns & Exchanges</h2>
              <p className="hint">Clear policy · Simple experience</p>
            </div>
            <div className="grid">
              <div className="card">
                <h3>Unopened items</h3>
                <p>Returns accepted for unopened products within 14 days (edit to your policy).</p>
              </div>
              <div className="card">
                <h3>Damaged orders</h3>
                <p>Contact us within 48 hours with photos and we’ll make it right.</p>
              </div>
              <div className="card">
                <h3>How to start</h3>
                <p>Email your order number + reason. We’ll reply with next steps.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrap">
            <div className="sectionTitle">
              <h2>Contact</h2>
              <p className="hint">Replace social links with your real accounts</p>
            </div>

            <div className="contactBox">
              <div className="card">
                <h3>Message us</h3>

                <div className="field">
                  <label>Your name</label>
                  <input placeholder="Your name" />
                </div>

                <div className="field" style={{ marginTop: 10 }}>
                  <label>Email</label>
                  <input placeholder="you@email.com" />
                </div>

                <div className="field" style={{ marginTop: 10 }}>
                  <label>Message</label>
                  <textarea placeholder="How can we help?" />
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn primary"
                    type="button"
                    onClick={() => alert("Demo form. We can connect it to a real inbox anytime.")}
                  >
                    Send
                  </button>
                </div>
              </div>

              <div className="card">
                <h3>Company</h3>
                <p><b>Email:</b> <a href="mailto:hello@greengiraffenc.com">hello@greengiraffenc.com</a></p>
                <p style={{ marginTop: 8 }}><b>Hours:</b> Mon–Sat (edit)</p>
                <p style={{ marginTop: 8 }}><b>Location:</b> North Carolina (add address)</p>

                <div className="divider" />

                <h3>Social</h3>
                <div className="social">
                  <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">TikTok</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">X</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="blog">
          <div className="wrap">
            <div className="sectionTitle">
              <h2>Blog</h2>
              <p className="hint">Education · Product insights · Store updates</p>
            </div>
            <div className="grid">
              <div className="card">
                <h3>Wellness education</h3>
                <p>Short, clean articles that build trust and help customers choose responsibly.</p>
              </div>
              <div className="card">
                <h3>New drops</h3>
                <p>Announce new products and link to lab reports for each release.</p>
              </div>
              <div className="card">
                <h3>Guides</h3>
                <p>Beginner-friendly guides — simple, compliant, transparent.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="wrap">
          <footer>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div>© {year} The Green Giraffe Dispensary · greengiraffenc.com</div>
              <div style={{ opacity: .9 }}>21+ · Lab-tested · Nature-inspired</div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
