'use client'

import { ResponseAxios } from "@/@types/responseAxios";
import useAuth from "@/hooks/useAuth";
import { message } from "antd";
import { useRouter } from "next/navigation";
import AuthenticationForm from "./component/AuthenticationForm";

export default function AuthenticationModule() {
  const data = useAuth()
  const router = useRouter()
  const [messageApi] = message.useMessage();

  const onFinishedForm = async (email: string, password: string) => {
    try {
      await data.login(email, password)
      router.push('/dashboard')
    } catch (err: any) {
      const error = err['response'] as ResponseAxios
      messageApi.error('error!')
    }
  }
  return (
    <div>
      <AuthenticationForm
        onFinishedForm={(form) => {
          onFinishedForm(form.email, form.password)
        }}
      />
    </div>
  )
}