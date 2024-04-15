import { Menu, Package2 } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function NavBar() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ">
                    <Link
                        to="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <img alt="a" src="assets/logo_azul_escuro.svg" className="h-48 w-48" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                        to="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        INÍCIO
                    </Link>
                    <Link
                        to="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        PROGRAMAÇÃO
                    </Link>
                    <Link
                        to="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        CHAMADA DE TRABALHO
                    </Link>
                    <Link
                        to="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        TÓPICOS DE INTERESSES
                    </Link>
                    <Link
                        to="#"
                        className="text-foreground transition-colors hover:text-foreground"
                    >
                        COMITÊ ORGANIZADOR
                    </Link>
                    <Link
                        to="#"
                        className="text-foreground transition-colors hover:text-foreground"
                    >
                        ANAIS DO EVENTO
                    </Link>
                    <Link
                        to="#"
                        className="text-foreground transition-colors hover:text-foreground"
                    >
                        EDIÇÕES ANTERIORES
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                to="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Package2 className="h-6 w-6" />
                                <span className="sr-only">Acme Inc</span>
                            </Link>
                            <Link
                                to="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Dashboard
                            </Link>
                            <Link
                                to="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Orders
                            </Link>
                            <Link
                                to="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Products
                            </Link>
                            <Link
                                to="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Customers
                            </Link>
                            <Link to="#" className="hover:text-foreground">
                                Settings
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </header>
        </div>
    )
}
