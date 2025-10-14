import { CtaButton } from './CtaButton';

export function StickyCta() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4 z-50">
      <CtaButton className="w-full text-base py-4" />
    </div>
  );
}
