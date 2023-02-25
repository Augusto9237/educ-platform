import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { AiFillGoogleCircle } from "react-icons/ai";
import Link from "next/link";
import { ButtonSecondary } from "../components/ButtonSecondary";

export default function Home() {
  return (
    <>
      <Container>
        <div className="flex w-full h-full max-sm:flex-col max-sm:items-center justify-between">
          <div/>
          <div>
            <span>Sua Logo</span>
          </div>
          <Link href='/profile' className="w-full">
          <ButtonSecondary>
            <strong className="mr-1">Entrar com o </strong><AiFillGoogleCircle size={20}/>
          </ButtonSecondary>
          </Link>
    
        </div>
      </Container>
    </>
  )
}
