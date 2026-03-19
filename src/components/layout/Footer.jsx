export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold">MyStore</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A modern e-commerce experience built with React.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-2 font-semibold">Quick Links</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Home</li>
              <li>Products</li>
              <li>Cart</li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="mb-2 font-semibold">About</h3>
            <p className="text-sm text-muted-foreground">
              Built for learning and portfolio purposes using modern frontend
              tools.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} OnlineStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
