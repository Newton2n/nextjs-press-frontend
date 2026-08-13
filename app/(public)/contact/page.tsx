"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useForm, ValidationError } from "@formspree/react";
import { FaGithub } from "react-icons/fa";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type PageHeaderProps = {
  title: string;
  description: string;
};

type SectionCardProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
        {title}
      </h1>

      <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
        {description}
      </p>
    </div>
  );
}

function SectionCard({
  title,
  description,
  children,
}: SectionCardProps) {
  return (
    <section className="min-w-0 rounded-xl border bg-card text-card-foreground shadow-sm">
      <div className="border-b px-4 py-5 sm:px-6 sm:py-6">
        <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
          {title}
        </h2>

        {description && (
          <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      <div className="min-w-0 px-4 py-5 sm:px-6 sm:py-6">
        {children}
      </div>
    </section>
  );
}

export default function ContactPage() {
  const pathname = usePathname();

  const [state, handleSubmit] = useForm("mdenzvog");
  const [showSuccess, setShowSuccess] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setShowSuccess(false);
  }, [pathname]);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
    }
  }, [state.succeeded]);

  const handleClear = () => {
    formRef.current?.reset();
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    void handleSubmit(event);
  };

  if (showSuccess) {
    return (
      <main className="mx-auto w-full max-w-screen-2xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 2xl:px-12 2xl:py-12">
        <div className="space-y-6 sm:space-y-8">
          <PageHeader
            title="Contact Us"
            description="Reach out for support, questions, or feedback."
          />

          <SectionCard
            title="Message Sent"
            description="Thank you for contacting us."
          >
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600 dark:text-green-500" />

                <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                  Your message has been sent successfully. We will get back to
                  you as soon as possible.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="w-full cursor-pointer sm:w-auto"
                >
                  <Link href="/">
                    <ArrowLeft className="mr-2 size-4" />
                    Back to Home
                  </Link>
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full cursor-pointer sm:w-auto"
                  onClick={() => setShowSuccess(false)}
                >
                  Send Another Message
                </Button>
              </div>
            </div>
          </SectionCard>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-screen-2xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 2xl:px-12 2xl:py-12">
      <div className="space-y-6 sm:space-y-8">
        <PageHeader
          title="Contact Us"
          description="Reach out for support, questions, or feedback."
        />

        <div className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] 2xl:gap-8">
          <SectionCard
            title="Send a Message"
            description="Fill out the form and we will get back to you."
          >
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="space-y-6"
              noValidate
            >
              <div className="grid min-w-0 gap-5 sm:grid-cols-2">
                <div className="min-w-0 space-y-3">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>

                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    disabled={state.submitting}
                    className="h-10 w-full"
                  />

                  <ValidationError
                    field="name"
                    prefix="Name"
                    errors={state.errors}
                    className="text-sm leading-5 text-destructive"
                  />
                </div>

                <div className="min-w-0 space-y-3">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    disabled={state.submitting}
                    className="h-10 w-full"
                  />

                  <ValidationError
                    field="email"
                    prefix="Email"
                    errors={state.errors}
                    className="text-sm leading-5 text-destructive"
                  />
                </div>
              </div>

              <div className="min-w-0 space-y-3">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground"
                >
                  Subject
                </label>

                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                  disabled={state.submitting}
                  className="h-10 w-full"
                />

                <ValidationError
                  field="subject"
                  prefix="Subject"
                  errors={state.errors}
                  className="text-sm leading-5 text-destructive"
                />
              </div>

              <div className="min-w-0 space-y-3">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>

                <Textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Describe your question or feedback..."
                  required
                  disabled={state.submitting}
                  className="min-h-40 w-full resize-y"
                />

                <ValidationError
                  field="message"
                  prefix="Message"
                  errors={state.errors}
                  className="text-sm leading-5 text-destructive"
                />
              </div>

              <ValidationError
                errors={state.errors}
                className="rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm leading-5 text-destructive"
              />

              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full cursor-pointer sm:flex-1"
                >
                  <Send className="mr-2 size-4" />
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  disabled={state.submitting}
                  onClick={handleClear}
                  className="w-full cursor-pointer sm:w-auto sm:px-8"
                >
                  Clear All
                </Button>
              </div>
            </form>
          </SectionCard>

          <div className="min-w-0 space-y-6 2xl:space-y-8">
            <SectionCard
              title="Contact Information"
              description="Get in touch directly"
            >
              <div className="space-y-6">
                <div className="flex min-w-0 items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-muted-foreground" />

                  <div className="min-w-0">
                    <p className="font-medium">Email</p>

                    <Link
                      href="mailto:newton.bepari.dev@gmail.com"
                      className="mt-1 block break-all text-sm text-muted-foreground transition-colors hover:text-foreground sm:break-normal"
                    >
                      newton.bepari.dev@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex min-w-0 items-start gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-muted-foreground" />

                  <div className="min-w-0">
                    <p className="font-medium">WhatsApp</p>

                    <Link
                      href="https://wa.me/8801612676969"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block break-all text-sm text-muted-foreground transition-colors hover:text-foreground sm:break-normal"
                    >
                      +880 1612-676969
                    </Link>
                  </div>
                </div>

                <div className="flex min-w-0 items-start gap-3">
                  <FaGithub className="mt-0.5 size-5 shrink-0 text-muted-foreground" />

                  <div className="min-w-0">
                    <p className="font-medium">GitHub</p>

                    <Link
                      href="https://github.com/Newton2n"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block break-all text-sm text-muted-foreground transition-colors hover:text-foreground sm:break-normal"
                    >
                      github.com/Newton2n
                    </Link>
                  </div>
                </div>

                <div className="flex min-w-0 items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-muted-foreground" />

                  <div className="min-w-0">
                    <p className="font-medium">Location</p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Barishal, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard
              title="Other Ways to Reach Us"
              description="Additional channels"
            >
              <ul className="space-y-4 text-sm leading-6">
                <li className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2">
                  <span className="shrink-0 font-medium">Availability:</span>

                  <span className="text-muted-foreground">
                    Daily, 01:00–19:00 UTC
                  </span>
                </li>

                <li className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2">
                  <span className="shrink-0 font-medium">Response time:</span>

                  <span className="text-muted-foreground">
                    Within 6 hours
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full cursor-pointer sm:w-auto"
                >
                  <Link href="/about">About</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full cursor-pointer sm:w-auto"
                >
                  <Link href="/privacy">Privacy & Terms</Link>
                </Button>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </main>
  );
}