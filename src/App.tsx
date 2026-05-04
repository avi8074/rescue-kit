import { ArrowRightIcon, DownloadIcon, MenuIcon, XIcon, ArrowUpIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

function FadeIn({ children, delay = 0, className = "", style = {} }: { children: React.ReactNode, delay?: number, className?: string, style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 600);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <nav>
        <div className="nav-brand">$37 STARTER KIT / RESCUE MANUAL</div>
        <div className="nav-cta">
          <span className="nav-price">$37</span>
          <a href="#pricing" className="btn-nav">GET THE KIT</a>
          <button
            className="nav-hamburger"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(o => !o)}
          >
            {mobileMenuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#pricing" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Get the Kit — $37</a>
            <a href="#pricing" className="btn-primary mobile-menu-btn" onClick={() => setMobileMenuOpen(false)}>
              <DownloadIcon size={16} style={{ marginRight: '8px' }} /> Buy Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-top-btn"
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUpIcon size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <main>
        <section className="hero" style={{ backgroundImage: "none", background: "#050505" }}>
          {/* Remove background image to match clean dark screenshot */}
          <div className="hero-glow"></div>
          <div className="hero-glow-2"></div>
          <div className="hero-inner" style={{ alignItems: "flex-start", textAlign: "left", paddingTop: "80px" }}>
            <FadeIn delay={0.1} className="hero-label">— FOR 20-SOMETHINGS WHO ARE DONE STARTING OVER</FadeIn>
            <FadeIn delay={0.2}>
              <h1 style={{ whiteSpace: "pre-line" }}>
                You Lost the Weight.{"\n"}
                <em>You Still Look Like{"\n"}
                <span className="strike">Shit</span> Naked.</em>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="hero-sub">
                The rescue kit for people who did everything right — tracked every calorie, ran, lost the weight — and still don't look like the effort they put in. Based on 200+ real posts from the people who felt exactly what you feel.
              </p>
            </FadeIn>
            <FadeIn delay={0.4} className="hero-reddit-proof">
              <div className="reddit-icon" style={{ fontSize: "9px", fontWeight: "bold", color: "white" }}>r/</div>
              <span>
                Built from <strong>200+ real posts</strong> on r/loseit, r/gainit, r/BulkOrCut
              </span>
            </FadeIn>
            <FadeIn delay={0.5} className="hero-actions" style={{ flexDirection: "row", alignItems: "center", gap: "20px" }}>
              <a href="#pricing" className="btn-primary" style={{ padding: "16px 32px" }}>
                <DownloadIcon size={18} style={{ marginRight: '8px' }} /> GET THE KIT FOR $37
              </a>
              <div className="hero-caveat" style={{ textAlign: "left", opacity: 0.7 }}>
                One-time. No subscription.<br />
                No upsells. No coaching calls.
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.7} className="hero-scroll" style={{ left: "50%", transform: "translateX(-50%)" }}>
            <div className="scroll-line" style={{ margin: "0 auto 10px" }}></div>
            SCROLL
          </FadeIn>
        </section>

      <section className="opening" style={{ paddingTop: "120px", paddingBottom: "120px", background: "#080808" }}>
        <FadeIn>
          <p style={{ fontSize: "2.5rem", fontFamily: "Playfair Display, serif", fontStyle: "italic", fontWeight: 400, color: "#EDEDED", marginBottom: "2rem" }}>
            "I don't look like the effort I put in."
          </p>
          <cite style={{ display: "block", color: "#C9975A", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.85rem", fontStyle: "normal", fontWeight: 600 }}>
            U/THROWAWAYFITNESS2024 • R/LOSEIT • 3:12AM
          </cite>
        </FadeIn>
      </section>

      <section className="section-pad data-bg">
        <div className="container">
          <FadeIn>
            <div className="sec-eyebrow">— WHAT YOU'VE ALREADY TRIED</div>
            <h2 className="display">
              Everything works on paper. <br />
              <em>None of it worked for you.</em>
            </h2>
            <p className="section-lead" style={{ maxWidth: "800px", fontSize: "1.1rem" }}>
              You've tried standard dieting. You've tried the internet's favorite 6-day push/pull/legs split. You've tried eating exactly what the calorie calculators told you to eat. <br/><br/>
              And the frustration isn't that you failed the plans — it's that you <em>followed</em> them, the scale went down, but the mirror didn't change the way you thought it would. <br/><br/>
              Standard muscle-building advice assumes you have a robust metabolic foundation. Standard weight-loss advice assumes your only goal is being a smaller number on the scale. Neither applies to you right now. 
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <FadeIn>
            <div className="sec-eyebrow">— WHAT THIS IS</div>
            <h2 className="display">
              You already know. <br />
              <em>Let's name it.</em>
            </h2>
            <p className="section-lead" style={{ maxWidth: "800px", fontSize: "1.1rem" }}>
              Skinny-fat isn't a medical term. It's a feeling. It's looking fine in a hoodie and avoiding mirrors when the shirt comes off. It's the specific, bitter frustration of having done the hard part and still not getting the reward.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} style={{ marginTop: "40px" }}>
            <div className="reddit-quote-card" style={{ padding: "24px", border: "1px solid #333", borderRadius: "12px", background: "#111", maxWidth: "800px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", fontSize: "0.85rem", color: "#888" }}>
                <div className="reddit-icon" style={{ fontSize: "9px", fontWeight: "bold", color: "white" }}>r/</div>
                r/loseit • u/hoodieforever • 1,200 upvotes
              </div>
              <p style={{ fontStyle: "italic", fontSize: "1rem", color: "#EDEDED" }}>"People tell me I look great now and I want to scream because they haven't seen me with my shirt off."</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: "40px" }}>
        <div className="container">
          <div className="types-grid">
            <FadeIn delay={0.1}>
              <div className="type-card" data-letter="A">
                <img src="/type-a.svg" alt="Type A: The Hoodie Effect" className="type-card-img" />
                <div className="type-tag">TYPE A</div>
                <h3>The Hoodie Effect</h3>
                <p className="type-quote">"Fine in clothes, soft underneath"</p>
                <ul>
                  <li>Normal BMI on paper. Zero confidence shirtless.</li>
                  <li>Gets complimented on weight loss and feels like a fraud.</li>
                  <li>The mirror is fine at 6pm, devastating at 2am.</li>
                  <li>Hasn't been shirtless in public in years.</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="type-card" data-letter="B">
                <img src="/type-b.svg" alt="Type B: Macro Prison" className="type-card-img" />
                <div className="type-tag">TYPE B</div>
                <h3>Macro Prison</h3>
                <p className="type-quote">"Terrified of eating more"</p>
                <ul>
                  <li>Eating 1,200-1,500 cal for months. Maybe years.</li>
                  <li>Scale hasn't moved but too scared to eat more.</li>
                  <li>Has calculated TDEE more than 20 times.</li>
                  <li>Constantly tired, cold, hungry, or all three.</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="type-card" data-letter="C">
                <img src="/type-c.svg" alt="Type C: The Dating Tax" className="type-card-img" />
                <div className="type-tag">TYPE C</div>
                <h3>The Dating Tax</h3>
                <p className="type-quote">"Dates go quiet after"</p>
                <ul>
                  <li>Socially functional. Matches on apps.</li>
                  <li>Ghosts before meeting, or fades after.</li>
                  <li>Keeps lights off, clothes on, distance maintained.</li>
                  <li>Has a narrative about why dating "just doesn't work."</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="type-card" data-letter="D">
                <img src="/type-d.svg" alt="Type D: The 2am Mirror" className="type-card-img" />
                <div className="type-tag">TYPE D</div>
                <h3>The 2am Mirror</h3>
                <p className="type-quote">"Who could want this?"</p>
                <ul>
                  <li>The mirror isn't neutral — it's actively painful.</li>
                  <li>Has Googled "body dysmorphia or just realistic?"</li>
                  <li>Avoids photos, reflections, fitting rooms.</li>
                  <li>This isn't about vanity. It's about worth.</li>
                </ul>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.5} style={{ marginTop: "40px" }}>
            <div className="reddit-quote-card" style={{ padding: "24px", border: "1px solid #333", borderRadius: "12px", background: "#111", maxWidth: "800px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", fontSize: "0.85rem", color: "#888" }}>
                <div className="reddit-icon" style={{ fontSize: "9px", fontWeight: "bold", color: "white" }}>r/</div>
                r/BulkOrCut • u/skinnyfatalt
              </div>
              <p style={{ fontStyle: "italic", fontSize: "1rem", color: "#EDEDED" }}>"I'm not even asking to look amazing. I just want to not hate what I see."</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mood-divider">
        <img src="https://picsum.photos/seed/iron/1920/800" alt="Iron plates in a dark gym" referrerPolicy="no-referrer" />
      </section>

      <section className="data-bg">
        <div className="container section-pad-sm">
          <FadeIn>
            <div className="sec-eyebrow">— THE DATA</div>
            <h2 className="display">
              200+ posts. <br />
              <em>47 people who actually got out.</em>
            </h2>
            <p className="section-lead" style={{ maxWidth: "800px", fontSize: "1.1rem" }}>
              This kit isn't a program someone invented and sold. It's the patterns extracted from the people who went from stuck to not-stuck — logged, cross-referenced, organized.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.1} className="data-grid" style={{ marginBottom: "60px" }}>
            <div className="data-cell">
              <div className="data-num" style={{ color: "#C9975A" }}>200+</div>
              <div className="data-label">POSTS COLLECTED</div>
              <div className="data-desc">3am rants, deleted drafts, "should I bulk or cut" posts that got 3 upvotes and one useless comment.</div>
            </div>
            <div className="data-cell">
              <div className="data-num" style={{ color: "#C9975A" }}>47</div>
              <div className="data-label">SUCCESS POSTS</div>
              <div className="data-desc">The ones who came back months later and said things actually changed. What they did was logged.</div>
            </div>
            <div className="data-cell">
              <div className="data-num" style={{ color: "#C9975A" }}>3</div>
              <div className="data-label">SHARED PATTERNS</div>
              <div className="data-desc">Every person who made it out shared the same three behaviors. This kit is built on those three things.</div>
            </div>
          </FadeIn>

          <div className="pattern-list">
            <FadeIn delay={0.2} className="pattern-row">
              <div className="pattern-pct">81%</div>
              <div>
                <div className="pattern-title">Ate at maintenance first — not a deficit, not a surplus</div>
                <div className="pattern-desc">38 of 47 people who succeeded ate at maintenance for at least 6 weeks before making any changes. The ones who went straight into bulk or cut were far less likely to report lasting results.</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} className="pattern-row">
              <div className="pattern-pct">87%</div>
              <div>
                <div className="pattern-title">Trained 3-4 days per week — not 5 or 6</div>
                <div className="pattern-desc">41 of 47 trained 3-4 sessions per week. The 6-day-a-week people burned out. The 2-day people progressed too slowly. There's something psychologically sustainable about lifting Monday, Wednesday, Friday that a 6-day split completely lacks.</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.4} className="pattern-row">
              <div className="pattern-pct">94%</div>
              <div>
                <div className="pattern-title">Tracked something beyond the scale</div>
                <div className="pattern-desc">44 of 47 tracked photos, measurements, lift numbers, or all three. The 3 who only tracked weight all quit after a plateau. This isn't motivation fluff — it's a survival mechanism.</div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} style={{ marginTop: "40px" }}>
            <div className="reddit-quote-card" style={{ padding: "24px", border: "1px solid #333", borderRadius: "12px", background: "#111", maxWidth: "800px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", fontSize: "0.85rem", color: "#888" }}>
                <div className="reddit-icon" style={{ fontSize: "9px", fontWeight: "bold", color: "white" }}>r/</div>
                r/loseit • u/eighthundreddollars
              </div>
              <p style={{ fontStyle: "italic", fontSize: "1rem", color: "#EDEDED" }}>"I spent $800 on programs over 3 years. The thing that finally worked was free: eating at maintenance and lifting 3x a week. I just needed someone to tell me it was okay to stop trying so hard."</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad data-bg">
        <div className="container">
          <FadeIn>
            <div className="sec-eyebrow">— THE 8-WEEK RESET</div>
            <h2 className="display">
              Not a transformation. <br />
              <em>A restoration.</em>
            </h2>
            <p className="section-lead" style={{ maxWidth: "800px" }}>
              The goal of the first 8 weeks isn't to look like a different person. It's to stabilize, lift, sleep, and repeat — until your body remembers what it feels like to function.
            </p>
          </FadeIn>
          
          <div className="timeline" style={{ marginTop: "40px" }}>
            <FadeIn delay={0.1} className="tl-item">
              <div className="tl-dot" style={{ fontSize: "0.8rem", width: "40px", height: "40px", flexShrink: 0, textAlign: "center", lineHeight: "40px" }}>1-2</div>
              <div className="tl-body" style={{ marginLeft: "20px" }}>
                <div className="tl-period">WEEKS 1-2</div>
                <div className="tl-title">Metabolic Breathing Room</div>
                <div className="tl-desc">You eat at true maintenance — not the calculator's number, your number. For most people this feels like a lot of food. Your energy comes back. Sleep gets deeper. You stop thinking about food 24 hours a day. Some people panic. You're not eating too much. You're just not starving anymore.</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="tl-item">
              <div className="tl-dot" style={{ fontSize: "0.8rem", width: "40px", height: "40px", flexShrink: 0, textAlign: "center", lineHeight: "40px" }}>3-4</div>
              <div className="tl-body" style={{ marginLeft: "20px" }}>
                <div className="tl-period">WEEKS 3-4</div>
                <div className="tl-title">The Lift Honeymoon</div>
                <div className="tl-desc">Three full-body sessions per week. Compound movements. You start adding weight to the bar not because you're getting jacked, but because your nervous system remembers how to fire. This is the most motivating phase. The weights go up fast. Log everything. Take your Week 4 photos even though you're "not supposed to look yet."</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} className="tl-item">
              <div className="tl-dot" style={{ fontSize: "0.8rem", width: "40px", height: "40px", flexShrink: 0, textAlign: "center", lineHeight: "40px" }}>5-6</div>
              <div className="tl-body" style={{ marginLeft: "20px" }}>
                <div className="tl-period">WEEKS 5-6</div>
                <div className="tl-title">The Body Composition Shift</div>
                <div className="tl-desc">Something interesting happens at maintenance plus lifting: you lose a little fat and gain a little muscle simultaneously. Not dramatic — maybe 1-2 lbs of each. But visible. Your clothes fit differently. Shoulders look slightly wider. The 2am mirror starts being slightly less cruel.</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.4} className="tl-item">
              <div className="tl-dot" style={{ fontSize: "0.8rem", width: "40px", height: "40px", flexShrink: 0, textAlign: "center", lineHeight: "40px" }}>7-8</div>
              <div className="tl-body" style={{ marginLeft: "20px" }}>
                <div className="tl-period">WEEKS 7-8</div>
                <div className="tl-title">The New Normal</div>
                <div className="tl-desc">You're not anxious about food anymore. The gym is just something you do — not a moral test. You've collected enough non-scale wins that the mirror matters less. You're actually ready — for a real bulk, a real cut, or just keep going. You have options now because you built a foundation.</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <FadeIn>
            <div className="sec-eyebrow">— WHAT YOU GET</div>
            <h2 className="display">
              Five components. <br />
              <em>One ZIP file. No upsells.</em>
            </h2>
            <p className="section-lead">
              Every piece does a specific job. You don't have to use all of them — but they're here when you need them.
            </p>
          </FadeIn>
          
          <div className="components-list" style={{ marginTop: "40px" }}>
            <FadeIn delay={0.1} className="component-row">
              <div className="component-num">1</div>
              <div className="component-body">
                <div className="component-name">The Main Rescue Manual</div>
                <div className="component-desc">28 pages. The full system — the why, the what, and the complete 8-week blueprint with exact exercises, sets, reps, progression rules, warm-ups, deload protocols, and troubleshooting. Read this first.</div>
              </div>
              <div className="component-badge">28 PAGES PDF</div>
            </FadeIn>
            <FadeIn delay={0.2} className="component-row">
              <div className="component-num">2</div>
              <div className="component-body">
                <div className="component-name">Mirror Test Diagnostic Guide</div>
                <div className="component-desc">A standalone PDF with the 4 silhouettes and a yes/no flowchart: skinny-fat or just untrained? Use it Day 1, Week 4, and Week 8. Sometimes the only win is "I'm a little less Type D today."</div>
              </div>
              <div className="component-badge">5 PAGES PDF</div>
            </FadeIn>
            <FadeIn delay={0.3} className="component-row">
              <div className="component-num">3</div>
              <div className="component-body">
                <div className="component-name">The Emotional Tax Journal</div>
                <div className="component-desc">14 prompts based on real 3am Reddit posts. "The locker room moment." "Dates go quiet after." "Who could actually want this?" Not woo-woo self-help. Processing the emotional debt that built while you were fighting your body.</div>
              </div>
              <div className="component-badge">16 PAGES PDF</div>
            </FadeIn>
            <FadeIn delay={0.4} className="component-row">
              <div className="component-num">4</div>
              <div className="component-body">
                <div className="component-name">Naked Progress Tracker</div>
                <div className="component-desc">A Google Sheets template with 5 tabs: Dashboard, Photos & Measurements, Lift Progress, Mirror Check, and Non-Scale Wins. Includes S:W ratio calculator. Open SETUP_INSTRUCTIONS.html — built in 10 minutes.</div>
              </div>
              <div className="component-badge">GOOGLE SHEETS</div>
            </FadeIn>
            <FadeIn delay={0.5} className="component-row">
              <div className="component-num">5</div>
              <div className="component-body">
                <div className="component-name">Day 1 Quick-Start Card</div>
                <div className="component-desc">Everything you need to begin tonight on one page. Your type, your starting calories, your Week 1 workout, and four concrete tasks. Use this before reading the manual. Or instead of it, if you just want to move.</div>
              </div>
              <div className="component-badge">1 PAGE PDF</div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <FadeIn>
            <div className="sec-eyebrow">— FROM THE PEOPLE WHO MADE IT</div>
            <h2 className="display">
              Not my words. <br />
              <em>Theirs.</em>
            </h2>
            <p className="section-lead" style={{ maxWidth: "800px" }}>
              These are the posts that made this kit exist. Not influencer testimonials. Real usernames, real timestamps, real people at 2am.
            </p>
          </FadeIn>
          
          <div className="quotes-mosaic" style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", marginTop: "40px" }}>
            <FadeIn delay={0.1} className="quote-tile" style={{ padding: "32px", background: "#111", border: "1px solid #222" }}>
              <blockquote style={{ fontSize: "1.1rem", fontStyle: "italic", marginBottom: "20px" }}>"The scale didn't move for a month. But my Large t-shirts started fitting like Mediums in the shoulders. That's when I knew."</blockquote>
              <div className="quote-source" style={{ color: "#888", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>— U/STEADYNOTPERFECT • R/BULKORCUT • 8 MONTHS LATER</div>
            </FadeIn>
            <FadeIn delay={0.2} className="quote-tile" style={{ padding: "32px", background: "#111", border: "1px solid #222" }}>
              <blockquote style={{ fontSize: "1.1rem", fontStyle: "italic", marginBottom: "20px" }}>"I was eating 1400 cal and looked soft. I bumped to 2100 and looked tighter in 4 weeks. I don't understand it but it's real."</blockquote>
              <div className="quote-source" style={{ color: "#888", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>— U/EATMORELOOKBETTER • R/GAINIT</div>
            </FadeIn>
            <FadeIn delay={0.3} className="quote-tile" style={{ padding: "32px", background: "#111", border: "1px solid #222" }}>
              <blockquote style={{ fontSize: "1.1rem", fontStyle: "italic", marginBottom: "20px" }}>"Week 6 I almost quit. I looked at my Week 1 photos and realized my shoulders were completely different. I just couldn't see it day to day."</blockquote>
              <div className="quote-source" style={{ color: "#888", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>— U/WEEK6SURVIVOR • R/BULKORCUT</div>
            </FadeIn>
            <FadeIn delay={0.4} className="quote-tile" style={{ padding: "32px", background: "#111", border: "1px solid #222" }}>
              <blockquote style={{ fontSize: "1.1rem", fontStyle: "italic", marginBottom: "20px" }}>"I thought my problem was my program. It was my sleep. 8 hours a night for 3 weeks and I added 15 lbs to every lift without changing anything else."</blockquote>
              <div className="quote-source" style={{ color: "#888", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>— U/SLEEPFORGAINS • R/GAINIT</div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-pad data-bg">
        <div className="container">
          <FadeIn>
            <div className="sec-eyebrow">— FREQUENTLY ASKED QUESTIONS</div>
            <h2 className="display">
              You have questions. <br />
              <em>Here are the answers.</em>
            </h2>
            <div style={{ maxWidth: "800px", marginTop: "40px", fontSize: "1.1rem", color: "#EDEDED", lineHeight: "1.8" }}>
              <dl style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ borderBottom: "1px solid #222", paddingBottom: "24px" }}>
                  <dt style={{ fontWeight: 600, color: "#C9975A", marginBottom: "8px" }}>Do I need a gym membership?</dt>
                  <dd style={{ color: "#888" }}>Yes. You need access to barbells, dumbbells, and standard weight lifting equipment. Home workouts are great for general fitness, but to send a strong enough signal to change your body composition at this specific stage, you need progressive overload with real iron.</dd>
                </div>
                <div style={{ borderBottom: "1px solid #222", paddingBottom: "24px" }}>
                  <dt style={{ fontWeight: 600, color: "#C9975A", marginBottom: "8px" }}>Is this for men or women?</dt>
                  <dd style={{ color: "#888" }}>The protocols in here are physiology-based. They apply equally to men and women dealing with post-weight-loss skinny-fat. The principles of metabolic stabilization and mechanical tension don't hold a gender bias.</dd>
                </div>
                <div style={{ borderBottom: "1px solid #222", paddingBottom: "24px" }}>
                  <dt style={{ fontWeight: 600, color: "#C9975A", marginBottom: "8px" }}>Will I gain weight eating at maintenance?</dt>
                  <dd style={{ color: "#888" }}>You might see a 1-3 lb scale fluctuation in the first week from glycogen and water as a result of eating slightly more and lifting. This is strictly water weight. A true maintenance caloric intake mathematically prevents fat mass weight gain. Your scale weight will stabilize.</dd>
                </div>
                <div>
                  <dt style={{ fontWeight: 600, color: "#C9975A", marginBottom: "8px" }}>What if I miss a workout?</dt>
                  <dd style={{ color: "#888" }}>The manual specifically addresses this. Skip it, or push it back a day. Working out 3 days a week leaves 4 entire days to recover or adapt. The plan is built for real life, not fitness influencers.</dd>
                </div>
              </dl>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <FadeIn>
            <div className="sec-eyebrow">— HONEST FILTER</div>
            <h2 className="display">
              This kit is <br />
              <em>not for you if —</em>
            </h2>
            <p className="section-lead" style={{ maxWidth: "800px" }}>
              I'd rather you don't buy this than buy it and feel disappointed. Read this section before you pay.
            </p>
          </FadeIn>
          
          <div className="notforyou-grid" style={{ marginTop: "40px" }}>
            <FadeIn className="nfy-card" style={{ gridColumn: "1 / -1", border: "1px solid var(--gold-dim)", background: "rgba(201,151,90,0.05)" }}>
              <div className="nfy-x" style={{ color: "var(--gold)", fontWeight: "bold" }}>✓</div>
              <div className="nfy-text">
                <strong style={{ display: "block", marginBottom: "8px", fontSize: "1.1rem", color: "#EDEDED" }}>This is exactly for you if:</strong>
                <span style={{ color: "#888" }}>You've lost weight but still hate your reflection, you've tried programs and burned out, you're not looking for a transformation, just to stop feeling like a fraud.</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="nfy-card">
              <div className="nfy-x" style={{ color: "red", fontWeight: "bold" }}>X</div>
              <div className="nfy-text">
                <strong style={{ display: "block", marginBottom: "8px", fontSize: "1.1rem", color: "#EDEDED" }}>You have 40+ lbs to lose</strong>
                <span style={{ color: "#888" }}>This kit is specifically for post-weight-loss skinny-fat. Come back when you're closer to goal weight. r/loseit has better resources for where you are now.</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="nfy-card">
              <div className="nfy-x" style={{ color: "red", fontWeight: "bold" }}>X</div>
              <div className="nfy-text">
                <strong style={{ display: "block", marginBottom: "8px", fontSize: "1.1rem", color: "#EDEDED" }}>You need results in 3 weeks</strong>
                <span style={{ color: "#888" }}>This is an 8-week reset. If you have a wedding in three weeks, nothing honest will get you there in time.</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} className="nfy-card">
              <div className="nfy-x" style={{ color: "red", fontWeight: "bold" }}>X</div>
              <div className="nfy-text">
                <strong style={{ display: "block", marginBottom: "8px", fontSize: "1.1rem", color: "#EDEDED" }}>You want to be told it's all in your head</strong>
                <span style={{ color: "#888" }}>It's not. Skinny-fat is a real physical state. This manual doesn't gaslight you into "just loving yourself." It gives you a concrete plan to change what you see.</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.4} className="nfy-card">
              <div className="nfy-x" style={{ color: "red", fontWeight: "bold" }}>X</div>
              <div className="nfy-text">
                <strong style={{ display: "block", marginBottom: "8px", fontSize: "1.1rem", color: "#EDEDED" }}>You want to get shredded</strong>
                <span style={{ color: "#888" }}>If you can already see your abs and want to get to 10% body fat, this isn't the right tool. This is for people who have never seen abs and would settle for "not soft."</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.5} className="nfy-card">
              <div className="nfy-x" style={{ color: "red", fontWeight: "bold" }}>X</div>
              <div className="nfy-text">
                <strong style={{ display: "block", marginBottom: "8px", fontSize: "1.1rem", color: "#EDEDED" }}>You have an active eating disorder</strong>
                <span style={{ color: "#888" }}>The nutrition guidance assumes "eating at maintenance" is psychologically safe. If it's not, please talk to a professional first.</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.6} className="nfy-card">
              <div className="nfy-x" style={{ color: "red", fontWeight: "bold" }}>X</div>
              <div className="nfy-text">
                <strong style={{ display: "block", marginBottom: "8px", fontSize: "1.1rem", color: "#EDEDED" }}>You're under 18</strong>
                <span style={{ color: "#888" }}>Your body is still developing. Eat enough. Lift if you want, but don't cut calories hard. Talk to a doctor or qualified coach in person.</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="author-section section-pad data-bg">
        <div className="container">
          <FadeIn>
            <div className="sec-eyebrow">— WHO MADE THIS</div>
            <div style={{ maxWidth: "800px", margin: "40px 0 0", fontSize: "1.1rem", lineHeight: "1.8", color: "#EDEDED" }}>
              <p style={{ marginBottom: "24px" }}>
                February 2024. I couldn't sleep. I was scrolling r/loseit at 2am — not because I needed to lose weight, but because I was in that same endless scroll. The one where you're not really looking for information anymore, just company. Proof that other people feel what you feel.
              </p>
              <p style={{ marginBottom: "24px" }}>
                I started collecting posts. Screenshots at first. Then a spreadsheet. Then a private Discord where I'd paste the ones that wrecked me. I read every comment on every post. When someone came back months later and said "update: here's what worked," I logged it.
              </p>
              <p style={{ marginBottom: "40px" }}>
                This is a $37 kit because that's what honest information should cost. Not $297. Not a monthly subscription. Just the truth, compiled, organized, and made actionable. If it changes your relationship with your body, that's worth way more than $37. If it doesn't work for you — email me. I'll refund you. No questions.
              </p>
              <p style={{ fontStyle: "italic", color: "#888", fontSize: "1rem" }}>
                — Not a transformation story. Just what actually works.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pricing-section section-pad" id="pricing" style={{ borderTop: "1px solid #222" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <FadeIn>
            <div className="sec-eyebrow" style={{ textAlign: "center" }}>— GET THE KIT</div>
            <h2 className="display" style={{ textAlign: "center", marginBottom: "20px" }}>
              One price. <br />
              <em>Everything inside.</em>
            </h2>
            <p className="section-lead" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 60px", color: "#aaa" }}>
              You've probably spent $200+ on programs that didn't account for where you actually are. This is $37.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="pricing-card" style={{ maxWidth: "100%", padding: "48px" }}>
              <div className="pricing-top" style={{ textAlign: "left", marginBottom: "32px" }}>
                <div className="pricing-label" style={{ fontSize: "1rem", letterSpacing: "2px", color: "#C9975A" }}>$37 STARTER KIT - COMPLETE</div>
                <div className="pricing-price" style={{ fontSize: "5rem", marginTop: "16px", marginBottom: "8px" }}>$37</div>
                <div className="pricing-once" style={{ color: "#888", fontSize: "0.9rem", letterSpacing: "1px" }}>ONE-TIME PAYMENT • INSTANT DOWNLOAD</div>
              </div>
              <div className="pricing-body">
                <ul className="pricing-includes" style={{ borderTop: "1px solid #333", paddingTop: "32px" }}>
                  <li style={{ marginBottom: "16px" }}><div className="check" style={{ borderColor: "#C9975A", borderWidth: "2px", borderStyle: "solid", borderRight: "none", borderTop: "none", transform: "rotate(-45deg)", width: "16px", height: "8px", marginRight: "16px", marginTop: "4px" }}></div><span style={{ color: "#EDEDED" }}>Component 1 — The Main Rescue Manual — 28 pages. The complete 8-week blueprint. Stop second-guessing your plan.</span></li>
                  <li style={{ marginBottom: "16px" }}><div className="check" style={{ borderColor: "#C9975A", borderWidth: "2px", borderStyle: "solid", borderRight: "none", borderTop: "none", transform: "rotate(-45deg)", width: "16px", height: "8px", marginRight: "16px", marginTop: "4px" }}></div><span style={{ color: "#EDEDED" }}>Component 2 — Mirror Test Diagnostic Guide — 4 silhouettes and a flowchart. So you know exactly where you're starting.</span></li>
                  <li style={{ marginBottom: "16px" }}><div className="check" style={{ borderColor: "#C9975A", borderWidth: "2px", borderStyle: "solid", borderRight: "none", borderTop: "none", transform: "rotate(-45deg)", width: "16px", height: "8px", marginRight: "16px", marginTop: "4px" }}></div><span style={{ color: "#EDEDED" }}>Component 3 — The Emotional Tax Journal — 14 prompts written from the exact posts that made this kit. "Who could actually want this?" is one of them.</span></li>
                  <li style={{ marginBottom: "16px" }}><div className="check" style={{ borderColor: "#C9975A", borderWidth: "2px", borderStyle: "solid", borderRight: "none", borderTop: "none", transform: "rotate(-45deg)", width: "16px", height: "8px", marginRight: "16px", marginTop: "4px" }}></div><span style={{ color: "#EDEDED" }}>Component 4 — Naked Progress Tracker — Google Sheets. Keep records of your wins that aren't on the scale.</span></li>
                  <li style={{ marginBottom: "16px" }}><div className="check" style={{ borderColor: "#C9975A", borderWidth: "2px", borderStyle: "solid", borderRight: "none", borderTop: "none", transform: "rotate(-45deg)", width: "16px", height: "8px", marginRight: "16px", marginTop: "4px" }}></div><span style={{ color: "#EDEDED" }}>Component 5 — Day 1 Quick-Start Card — Start tonight on one page. Put an end to the research phase.</span></li>
                </ul>
                <a href="#payment-link" className="btn-buy" style={{ marginTop: "32px", padding: "20px" }}>GET INSTANT ACCESS — $37</a>
                
                <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", color: "#C9975A", fontSize: "0.9rem", fontWeight: "600" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Refund guarantee — email me, no questions.
                </div>

                <div className="pricing-micro" style={{ textAlign: "center", marginTop: "24px", color: "#888", fontSize: "0.85rem", lineHeight: "1.6" }}>
                  <strong>You'll receive a download link by email within minutes.</strong><br/>
                  ZIP file. Opens on any device. No account needed.<br/>
                  No upsells. No platinum tier. No coaching calls.
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="final-cta section-pad">
        <FadeIn className="container" style={{ textAlign: "center" }}>
          <h2 className="display" style={{ fontSize: "4rem", marginBottom: "24px" }}>
            It's 2am. <br />
            <em>You already know.</em>
          </h2>
          <p className="section-lead" style={{ maxWidth: "700px", margin: "0 auto 40px" }}>
            You've already done the hard part. You lost the weight. Now fix the part that didn't follow. Eight weeks. Three lifts a week. Maintenance calories. That's the whole thing.
          </p>
          <a href="#pricing" className="btn-primary" style={{ display: 'inline-flex', padding: "20px 40px", fontSize: "1.1rem" }}>
            <DownloadIcon size={20} style={{ marginRight: '10px' }} /> GET THE KIT FOR $37
          </a>
        </FadeIn>
      </section>
      </main>

      <footer style={{ padding: "40px", borderTop: "1px solid #222", display: "flex", justifyContent: "space-between", color: "#888", fontSize: "0.9rem", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
        <div>
          <strong style={{ color: "#EDEDED", display: "block", marginBottom: "4px" }}>Not a transformation story. Just what actually works.</strong>
          Based on 200+ posts from r/loseit, r/gainit, r/BulkOrCut
        </div>
        <div>
          <a href="#pricing" style={{ color: "#C9975A", textDecoration: "none" }}>Buy — $37</a> <span style={{ margin: "0 8px" }}>·</span> <a href="#support-email" style={{ color: "#888", textDecoration: "none" }}>Questions? Email</a>
        </div>
      </footer>
    </>
  );
}
