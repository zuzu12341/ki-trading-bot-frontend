import { useState } from 'react';

function App() {
  const [apiKey, setApiKey] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold">BTC KI-Trading-Bot</h1>
        <p className="text-sm">Automatisiertes Trading mit Künstlicher Intelligenz</p>
      </header>

      <main className="p-6 grid gap-6">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Starte mit deinem Bitcoin-Bot</h2>
          <p className="max-w-xl mx-auto">
            Unser KI-gesteuerter Trading-Bot analysiert den Markt in Echtzeit und setzt automatisch Trades für dich um. Einfach API-Key verbinden und loslegen.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Jetzt starten</button>
        </section>

        <section className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">API-Key verbinden</h3>
            <input
              type="text"
              placeholder="Dein Binance API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="p-2 border w-full rounded"
            />
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded">Speichern</button>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Bot-Status</h3>
            <p className="text-green-600 font-medium">Aktiv</p>
            <p className="text-sm text-gray-500">Letzter Trade: BTC/USDT Long (0.001 BTC)</p>
          </div>
        </section>
      </main>

      <footer className="bg-white text-center text-sm p-4 mt-8">
        &copy; 2025 BTC KI-Bot. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}

export default App;
