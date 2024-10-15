import Container from '@components/Container'
import Logo from '@components/Logo'
import WhatsAppButton from '@components/WhatsAppButton'

export default function Header() {
  return (
    <header className='bg-white fixed top-0 left-0 z-10 w-full h-header-height'>
      <Container className={`flex justify-between items-center h-full`}>
        <Logo />
				<WhatsAppButton />
      </Container>
    </header>
  )
}
