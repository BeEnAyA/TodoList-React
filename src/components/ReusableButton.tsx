import { Button } from '@/components/ui/button'

type ButtonProps = {
  title?: string;
  type?: string;
  onClick?: () => Promise<void>
}

export default function ReusableButton(props: ButtonProps) {
  return (
    <Button className={`w-full ${props.type === "secondary" ? "opacity-85" : ""}`} onClick={props.onClick}>{props.title ?? "Button"}</Button>
  )
}
