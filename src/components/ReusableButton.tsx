import { Button } from '@/components/ui/button'

type ButtonProps= {
  title?: string;
  type?: string;
}

export default function ReusableButton(props:ButtonProps) {
  return (
    <Button className={`w-full ${props.type === "secondary" ? "opacity-85" : ""}`}>{props.title ?? "Button"}</Button>
  )
}
