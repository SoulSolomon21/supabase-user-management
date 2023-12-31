'use client'

import { Database } from "@/types/supabase"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"

export default function AuthForm() {
    const supabase = createClientComponentClient<Database>()

    return (
        <Auth
            supabaseClient={supabase}
            view="magic_link"
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            showLinks={false}
            providers={[]}
            redirectTo={`https://3000-soulsolomon-supabaseuse-bmwtuww7skb.ws-eu102.gitpod.io/auth/callback`}
        />
      )
}