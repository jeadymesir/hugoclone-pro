import { Layout } from '@/components/layout/Layout';
import { Building2, CreditCard, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PageDecorations, SectionDecorations } from '@/components/decorative/PageDecorations';
import { Scribble } from '@/components/decorative/Scribbles';

const bankAccounts = [
  {
    id: 1,
    bankName: 'Republic Bank Suriname (RBS)',
    accountName: 'Rosheuvel & Partners Business Group N.V.',
    accountNumberSRD: '01509.78922',
    accountNumberUSD: '01971.14985',
    accountNumberEUR: '01974.44322',
    logo: '🏦',
  },
  {
    id: 2,
    bankName: 'De Surinaamsche Bank (DSB)',
    accountName: 'Rosheuvel & Partners Business Group N.V.',
    accountNumberSRD: '32.11.746',
    accountNumberUSD: '32.11.789',
    accountNumberEUR: '32.11.797',
    logo: '🏛️',
  },
  {
    id: 3,
    bankName: 'Finabank N.V.',
    accountName: 'Rosheuvel & Partners Business Group N.V.',
    accountNumberSRD: '1.000.160.993',
    accountNumberUSD: '1.000.161.973',
    accountNumberEUR: '1.000.438.312',
    logo: '💳',
  },
];

const BankDetails = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <PageDecorations variant="default" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Payment Information
            </span>
            <div className="relative inline-block">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                Bank Details
              </h1>
              <div className="absolute -bottom-2 left-0 w-40">
                <Scribble variant="underline" color="primary" />
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mt-4">
              Use the following bank account details to make payments for our services. 
              Please include your invoice number as the payment reference.
            </p>
          </div>
        </div>
      </section>

      {/* Bank Accounts */}
      <section className="py-20 relative overflow-hidden">
        <SectionDecorations position="both" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bankAccounts.map((account) => (
              <div
                key={account.id}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow relative group"
              >
                {/* Hover scribble */}
                <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Scribble variant="star" color="primary" size="sm" />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">
                    {account.logo}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">{account.bankName}</h3>
                    <p className="text-sm text-muted-foreground">SRD / USD / EUR</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Account Name</p>
                    <p className="font-medium text-sm">{account.accountName}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">SRD Account</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-mono font-medium">{account.accountNumberSRD}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => copyToClipboard(account.accountNumberSRD, `${account.id}-srd`)}
                      >
                        {copiedId === `${account.id}-srd` ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">USD Account</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-mono font-medium">{account.accountNumberUSD}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => copyToClipboard(account.accountNumberUSD, `${account.id}-usd`)}
                      >
                        {copiedId === `${account.id}-usd` ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">EUR Account</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-mono font-medium">{account.accountNumberEUR}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => copyToClipboard(account.accountNumberEUR, `${account.id}-eur`)}
                      >
                        {copiedId === `${account.id}-eur` ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Instructions */}
          <div className="mt-16 bg-primary/5 rounded-2xl p-8 lg:p-12 relative">
            <div className="absolute -top-4 -right-4 hidden md:block">
              <Scribble variant="circle" color="muted" size="md" className="opacity-40" />
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold mb-4">Payment Instructions</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    <span>Always include your invoice number as the payment reference.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    <span>For international transfers, ensure you use the correct SWIFT code.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    <span>Send payment confirmation to <a href="mailto:finance@rpbg.net" className="text-primary hover:underline">finance@rpbg.net</a>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">4.</span>
                    <span>For payment inquiries, contact our finance department at +597 433932.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BankDetails;
