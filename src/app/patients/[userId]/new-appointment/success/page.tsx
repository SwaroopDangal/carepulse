import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";

const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  const resolvedSearchParams = await searchParams;

  const appointmentId = (resolvedSearchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0f14] px-4">
      <div className="w-full max-w-xl text-center">
        {/* Logo */}
        <div className="mb-10 flex justify-center items-center gap-2">
          <Image
            src="/assets/icons/logo-icon.svg"
            alt="CarePulse"
            width={28}
            height={28}
          />
          <span className="text-white font-semibold text-lg">CarePulse</span>
        </div>

        {/* Success Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20">
          <Image
            src="/assets/gifs/success.gif"
            alt="Success"
            width={72}
            height={72}
          />
        </div>

        {/* Heading */}
        <h1 className="mb-3 text-2xl font-semibold text-white">
          Your <span className="text-emerald-400">appointment request</span> has
          been successfully submitted!
        </h1>

        <p className="mb-10 text-sm text-gray-400">
          We will be in touch shortly to confirm.
        </p>

        {/* Divider */}
        <div className="mx-auto mb-6 h-px w-3/4 bg-white/10" />

        {/* Appointment Details */}
        <div className="mb-10 flex items-center justify-center gap-6 text-sm text-gray-300">
          <span className="text-gray-500">Requested appointment details:</span>

          <div className="flex items-center gap-2">
            <Image
              src={doctor?.image!}
              alt="Doctor"
              width={18}
              height={18}
              className="rounded-full"
            />
            <span>Dr. {doctor?.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              alt="Calendar"
              width={16}
              height={16}
            />
            <span>{formatDateTime(appointment.schedule).dateTime}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          asChild
          className="rounded-lg bg-emerald-500 px-6 py-2 text-sm font-medium text-white hover:bg-emerald-600"
        >
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>

        {/* Footer */}
        <p className="mt-10 text-xs text-gray-500">© 2024 CarePulse</p>
      </div>
    </div>
  );
};

export default RequestSuccess;
