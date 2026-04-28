export default function Footer() {
  return (
    <footer className="py-12 bg-[#E9F1FA] border-t border-[#00ABE4]/10 text-center">
      <p className="text-zinc-600 font-medium pb-12">
        © {new Date().getFullYear()} Surya Permadi. All rights reserved.
      </p>
    </footer>
  );
}
