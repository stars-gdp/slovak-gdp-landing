import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Clock, ShieldCheck, CheckCircle2, ArrowRight, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <Rocket className="h-5 w-5" />
            <span>Global Dropshipping</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="text-slate-600 hover:text-slate-900">
              O projekte
            </a>
            <a href="#how" className="text-slate-600 hover:text-slate-900">
              Ako to funguje
            </a>
            <a href="#eu" className="text-slate-600 hover:text-slate-900">
              Pravidlá v EÚ
            </a>
            <a href="#req" className="text-slate-600 hover:text-slate-900">
              Požiadavky
            </a>
            <a href="#faq" className="text-slate-600 hover:text-slate-900">
              FAQ
            </a>
          </nav>
          <a href="#next" className="ml-4">
            <Button className="rounded-2xl px-5">Ďalšie kroky</Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Informácie o projekte Global Dropshipping
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Ďakujeme za vašu prihlášku. Tu nájdete prehľad toho, čo projekt prináša a čo si
              prejdeme na
              <strong> 40‑minútovom online stretnutí</strong>.{" "}
              <strong>Angličtina je povinná</strong>. Produkt je
              <strong> dostupný v Európe (od augusta 2025)</strong>. Nejde o pracovný pomer; odmena
              závisí od výkonu.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#about">
                <Button size="lg" className="rounded-2xl">
                  Zistiť viac
                </Button>
              </a>
              <a
                href="#next"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
              >
                Ďalšie kroky <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Feature
                icon={<Globe className="h-5 w-5" />}
                title="Produkt v EÚ"
                subtitle="Dostupný od 08/2025"
              />
              <Feature
                icon={<Clock className="h-5 w-5" />}
                title="40 min call"
                subtitle="stručne a vecne"
              />
              <Feature
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Transparentné"
                subtitle="nie je to zamestnanie"
              />
            </div>
          </div>

          <Card className="rounded-2xl border-slate-200 shadow-xl" id="about">
            <CardHeader>
              <CardTitle>Čo je Global Dropshipping</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-700">
              <p>
                Global dropshipping je <strong>e‑commerce model</strong>, v ktorom sa produkty
                predávajú online a tovar odosiela <strong>priamo dodávateľ</strong> zákazníkovi.
                Partner sa sústredí na marketing, výber sortimentu, komunikáciu so zákazníkom a
                správu objednávok; sklad a logistiku rieši dodávateľ.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm">
                <li>Žiadny vlastný sklad; objednávky sa odosielajú dodávateľovi na expedíciu.</li>
                <li>Margin vzniká rozdielom medzi nákupnou a predajnou cenou.</li>
                <li>
                  Dôraz na <strong>kvalitu dodávateľov</strong>, časy doručenia a popredajný servis.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold md:text-3xl">Ako to funguje (proces)</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <Step
              no="1"
              title="Výber produktov"
              text="Analýza dopytu, kvality a marže; validácia dodávateľov."
            />
            <Step
              no="2"
              title="Zverejnenie ponuky"
              text="Tvorba listingu, jasná komunikácia dostupnosti a doručenia."
            />
            <Step
              no="3"
              title="Objednávka a expedícia"
              text="Zákazník objedná; dodávateľ expeduje priamo zákazníkovi."
            />
            <Step
              no="4"
              title="Podpora a vrátenia"
              text="Riešenie dotazov, vrátení a reklamácií podľa práva EÚ."
            />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Benefit
              title="Vaša úloha"
              text="Marketing a získavanie objednávok, komunikácia so zákazníkmi, dohľad nad kvalitou a transparentné informácie o doručení."
            />
            <Benefit
              title="Dodávateľ"
              text="Drží sklad, balí a odosiela; zdieľa tracking a informácie o zásielke."
            />
            <Benefit
              title="Meranie výsledkov"
              text="Sledujeme konverzie, refund rate, reklamácie a čas doručenia."
            />
          </div>
        </div>
      </section>

      {/* EU rules */}
      <section id="eu" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold md:text-3xl">Pravidlá a štandardy v EÚ (stručne)</h2>
          <div className="mt-6 grid gap-6 text-sm text-slate-700 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="mb-2 font-semibold">Práva spotrebiteľov</div>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>14‑dňové právo na odstúpenie</strong> pri online nákupe tovaru.
                </li>
                <li>Jasná informácia o nákladoch na vrátenie a o procese reklamácií.</li>
                <li>Transparentné dodacie lehoty a pôvod tovaru.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="mb-2 font-semibold">DPH a režimy OSS/IOSS</div>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Predaj koncovým zákazníkom v EÚ: zvážte <strong>OSS</strong> pre deklaráciu DPH v
                  jednom štáte.
                </li>
                <li>
                  Dovoz zásielok do 150 € z tretích krajín: použitie <strong>IOSS</strong> na výber
                  DPH pri pokladni.
                </li>
                <li>
                  V SR platia pravidlá finančnej správy pre OSS/IOSS; účtovníctvo a evidencia sú
                  povinné.
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Pozn.: Tieto body sú informatívne; konkrétne nastavenie daní a zmlúv konzultujte s
            účtovníkom/právnikom.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section id="req" className="border-y bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold md:text-3xl">Požiadavky na spoluprácu</h2>
          <ul className="mt-6 grid gap-3 text-slate-700 md:grid-cols-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5" /> Komunikatívna{" "}
              <strong>znalosť angličtiny</strong> (práca s dodávateľmi a podpora).
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5" /> Účasť na{" "}
              <strong>40‑min online stretnutí</strong> – detailný prehľad procesu.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5" /> Transparentná komunikácia: doručenie,
              vrátenia, záruky.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5" /> Zodpovednosť za zákaznícku skúsenosť a
              kvalitu ponuky.
            </li>
          </ul>
          <p className="mt-4 text-sm text-slate-500">
            Nejde o pracovný pomer; spolupráca je nezávislá a odmena je výsledkovo orientovaná.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold md:text-3xl">Často kladené otázky</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <FAQ
              q="Je to pracovné miesto?"
              a="Nie. Ide o nezávislú spoluprácu v oblasti e‑commerce; neexistuje fixný plat a príjem nie je garantovaný."
            />
            <FAQ
              q="Je angličtina naozaj nutná?"
              a="Áno. Potrebná je komunikácia v angličtine (min. pracovná úroveň)."
            />
            <FAQ
              q="Ako dlho trvá úvodné stretnutie?"
              a="Približne 40 minút. Povieme všetko dôležité a odpovieme na otázky."
            />
            <FAQ
              q="Je produkt dostupný v Európe?"
              a="Áno, projekt funguje s produktom dostupným v EÚ od augusta 2025."
            />
            <FAQ
              q="Ako riešite vrátenia a reklamácie?"
              a="Podľa práva EÚ: 14‑dňové odstúpenie, jasne uvedené náklady na vrátenie a férový proces reklamácií."
            />
            <FAQ
              q="Čo ak dodanie trvá dlhšie?"
              a="Komunikujeme reálne lehoty podľa pôvodu tovaru; zákazníka informujeme o trackingu a možnostiach storna."
            />
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section id="next" className="border-y bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold md:text-3xl">Ďalšie kroky</h2>
          <ol className="mt-6 list-decimal space-y-2 pl-5 text-slate-700">
            <li>Skontrolujte e‑mail/WhatsApp – pošleme potvrdenie a link na online stretnutie.</li>
            <li>Pripravte si otázky k procesom, dodávateľom a zákazníckej podpore.</li>
            <li>
              Po stretnutí dostanete podklady: checklist kvality dodávateľa, šablóny komunikácie a
              postupy pre vrátenia.
            </li>
          </ol>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 text-sm text-slate-600 md:grid-cols-3">
          <div>
            <div className="font-semibold text-slate-900">Global Dropshipping</div>
            <p className="mt-2">
              Transparentná a etická spolupráca v rámci EÚ. Bez prehnaných sľubov, s dôrazom na
              výsledky.
            </p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Dokumenty</div>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://secure.bhipenergy.com/ClientDocs/BHIP/bHIP-PrivacyPolicy-EU-20180525.pdf"
                  className="hover:underline"
                >
                  Zásady ochrany osobných údajov (GDPR)
                </a>
              </li>
              <li>
                <a
                  href="https://secure.bhipenergy.com/AppPoliciesProcedures.aspx?appCountry=US&docType=pnp"
                  className="hover:underline"
                >
                  Podmienky spolupráce
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Kontakt</div>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="mailto:ahronsilv@gmail.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  E-mail: ahronsilv@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/972546253106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  WhatsApp: +972 54 625 3106
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/ahronsilv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Telegram: @ahronsilv
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Global Dropshipping. Všetky práva vyhradené.
        </div>
      </footer>
    </div>
  );
}

function Feature({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="rounded-xl border bg-slate-50 p-2">{icon}</div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-slate-500">{subtitle}</div>
      </div>
    </div>
  );
}

function Step({ no, title, text }: { no: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="text-xs text-slate-500">Krok {no}</div>
      <div className="mt-1 font-semibold">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{text}</div>
    </div>
  );
}

function Benefit({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{text}</div>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border bg-white p-4 shadow-sm open:shadow-md">
      <summary className="cursor-pointer list-none font-medium text-slate-900">{q}</summary>
      <div className="mt-2 text-sm text-slate-600">{a}</div>
    </details>
  );
}
