export function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-accent/20">
      <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} O Truque do Orgasmo. Todos os direitos reservados.</p>
        <p className="mt-4 max-w-3xl mx-auto">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. Os resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </footer>
  );
}
