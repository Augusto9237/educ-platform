import { Button } from "../components/Button";
import { Container } from "../components/Container";

export default function Home() {
  return (
    <>
      <Container>
        <div className="flex w-full h-full max-sm:flex-col max-sm:items-center justify-between">
          <div/>
          <div>
            <span>Sua Logo</span>
          </div>
          <Button>
            <strong>Let’s Get Started</strong>
          </Button>
        </div>
      </Container>
    </>
  )
}
