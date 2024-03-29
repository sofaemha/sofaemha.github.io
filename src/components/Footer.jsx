import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t pt-10 pb-16 border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="text-sm text-zinc-500">
                &copy; {new Date().getFullYear()} Sofa Machabba Haeta. All
                rights reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
