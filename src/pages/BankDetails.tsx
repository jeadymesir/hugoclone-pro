import { Layout } from '@/components/layout/Layout';
import { Building2, CreditCard, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const bankAccounts = [
  {
    id: 1,
    bankName: 'De Surinaamsche Bank N.V.',
    accountName: 'Rosheuvel & Partners Business Group N.V.',
    accountNumber: 'SRD: 100.xxx.xxx',
    accountNumberUSD: 'USD: 200.xxx.xxx',
    swiftCode: 'SABORSR',
    currency: 'SRD / USD',
    logo: '🏦',
  },
  {
    id: 2,
    bankName: 'Hakrinbank N.V.',
    accountName: 'Rosheuvel & Partners Business Group N.V.',
    accountNumber: 'SRD: 300.xxx.xxx',
    accountNumberUSD: 'USD: 400.xxx.xxx',
    swiftCode: 'HAKRSR22',
    currency: 'SRD / USD',
    logo: '🏛️',
  },
  {
    id: 3,
    bankName: 'Finabank N.V.',
    accountName: 'Rosheuvel & Partners Business Group N.V.',
    accountNumber: 'SRD: 500.xxx.xxx',
    accountNumberUSD: 'EUR: 600.xxx.xxx',
    swiftCode: 'FABORSR',
    currency: 'SRD / EUR',
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
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Payment Information
            </span>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
              Bank Details
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Use the following bank account details to make payments for our services. 
              Please include your invoice number as the payment reference.
            </p>
          </div>
        </div>
      </section>

      {/* Bank Accounts */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bankAccounts.map((account) => (
              <div
                key={account.id}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">
                    {account.logo}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">{account.bankName}</h3>
                    <p className="text-sm text-muted-foreground">{account.currency}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Account Name</p>
                    <p className="font-medium text-sm">{account.accountName}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Account Number</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-mono font-medium">{account.accountNumber}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => copyToClipboard(account.accountNumber, `${account.id}-srd`)}
                      >
                        {copiedId === `${account.id}-srd` ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Foreign Currency Account</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-mono font-medium">{account.accountNumberUSD}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => copyToClipboard(account.accountNumberUSD, `${account.id}-usd`)}
                      >
                        {copiedId === `${account.id}-usd` ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">SWIFT Code</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-mono font-medium">{account.swiftCode}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => copyToClipboard(account.swiftCode, `${account.id}-swift`)}
                      >
                        {copiedId === `${account.id}-swift` ? (
                          <Check className="h-4 w-4 text-green-500" />
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
          <div className="mt-16 bg-primary/5 rounded-2xl p-8 lg:p-12">
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
