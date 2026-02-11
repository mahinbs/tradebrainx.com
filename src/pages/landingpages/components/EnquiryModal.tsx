import React from 'react';
import { Controller } from "react-hook-form";
import { Button } from "../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { X } from "lucide-react";
import { FaUser, FaEnvelope, FaPhone, FaCreditCard } from "react-icons/fa";

export interface EnquiryFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  plan: string;
}

interface EnquiryModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: EnquiryFormValues) => Promise<void>;
  isSubmitting: boolean;
  control: any;
  register: any;
  errors: any;
  handleSubmit: any; // Added handleSubmit from useForm
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onOpenChange,
  onSubmit,
  isSubmitting,
  control,
  register,
  errors,
  handleSubmit
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-md bg-[#050b1a]/95 backdrop-blur-3xl border border-emerald-500/50 text-white p-0 rounded-3xl shadow-[0_0_100px_rgba(16,185,129,0.2)] overflow-hidden gap-0 ring-1 ring-white/5">

        {/* Header */}
        <div className="relative p-10 pb-6 bg-linear-to-b from-emerald-500/10 to-transparent">
          <div className="absolute top-0 right-0 p-6">
            <DialogClose className="cursor-pointer text-emerald-500/60 hover:text-emerald-400 transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full">
              <X size={16} />
            </DialogClose>
          </div>
          <DialogTitle className="text-2xl font-black tracking-tight mb-2">
            Terminal Activation
          </DialogTitle>
          <p className="text-emerald-50/40 text-xs font-mono uppercase tracking-widest">
            Secure your Q1 Institutional Allocation.
          </p>
        </div>

        <form className="px-10 pb-10 space-y-6" onSubmit={handleSubmit(onSubmit)}>

          <div className="space-y-4">
            {/* Name Field */}
            <div className="group relative">
              <div className="absolute left-4 top-3.5 text-emerald-500/50 group-focus-within:text-emerald-500 transition-colors pointer-events-none">
                <FaUser size={14} />
              </div>
              <Input
                {...register("name", { required: true })}
                className="pl-11 bg-black/40 border-emerald-500/10 text-white focus:border-emerald-500/50 focus:ring-emerald-500/50 h-12 rounded-xl text-sm placeholder:text-emerald-500/50 transition-all font-medium"
                placeholder="Full Legal Name"
              />
              {errors.name && <span className="text-emerald-400 text-[10px] ml-1 font-mono uppercase tracking-tighter mt-1 block">Authentication Required</span>}
            </div>

            {/* Email Field */}
            <div className="group relative">
              <div className="absolute left-4 top-3.5 text-emerald-500/50 group-focus-within:text-emerald-500 transition-colors pointer-events-none">
                <FaEnvelope size={14} />
              </div>
              <Input
                {...register("email", { required: true })}
                className="pl-11 bg-black/40 border-emerald-500/10 text-white focus:border-emerald-500/50 focus:ring-emerald-500/50 h-12 rounded-xl text-sm placeholder:text-emerald-500/50 transition-all font-medium"
                placeholder="Institutional Email"
              />
              {errors.email && <span className="text-emerald-400 text-[10px] ml-1 font-mono uppercase tracking-tighter mt-1 block">Address Required</span>}
            </div>

            {/* Phone Field */}
            <div className="group relative">
              <div className="absolute left-4 top-3.5 text-emerald-500/50 group-focus-within:text-emerald-500 transition-colors pointer-events-none">
                <FaPhone size={14} />
              </div>
              <Input
                {...register("phone", {
                  required: "Required",
                  pattern: {
                    value: /^\+?[0-9\s-()]{10,}$/,
                    message: "Invalid sequence"
                  }
                })}
                className="pl-11 bg-black/40 border-emerald-500/10 text-white focus:border-emerald-500/50 focus:ring-emerald-500/50 h-12 rounded-xl text-sm placeholder:text-emerald-500/50 transition-all font-medium"
                placeholder="Direct Contact"
              />
              {errors.phone && <span className="text-emerald-400 text-[10px] ml-1 font-mono uppercase tracking-tighter mt-1 block">{errors.phone.message}</span>}
            </div>

            {/* Plan Selection */}
            <div className="group relative">
              <div className="absolute left-4 top-3.5 text-emerald-500/50 z-10 group-focus-within:text-emerald-500 transition-colors pointer-events-none">
                <FaCreditCard size={14} />
              </div>
              <Controller
                name="plan"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="pl-11 bg-black/40 border-emerald-500/10 text-white focus:border-emerald-500/50 focus:ring-emerald-500/50 h-12 rounded-xl text-sm transition-all font-medium">
                      <SelectValue placeholder="Resource Tier" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0a1229] border-emerald-500/50 text-white shadow-2xl">
                      <SelectItem value="monthly" className="focus:bg-emerald-500/50 focus:text-emerald-300 cursor-pointer text-sm font-medium">Professional ($49)</SelectItem>
                      <SelectItem value="quarterly" className="focus:bg-emerald-500/50 focus:text-emerald-300 cursor-pointer text-sm font-medium">Institutional ($129)</SelectItem>
                      <SelectItem value="lifetime" className="focus:bg-emerald-500/50 focus:text-emerald-300 cursor-pointer text-sm font-medium">Sovereign ($499)</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.plan && <span className="text-emerald-400 text-[10px] ml-1 font-mono uppercase tracking-tighter mt-1 block">Tier Selection Required</span>}
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-500 text-black hover:bg-emerald-400 font-black py-7 text-base rounded-xl shadow-xl shadow-emerald-500/50 transition-all duration-300 transform hover:scale-[1.02] mt-4 uppercase tracking-widest"
          >
            {isSubmitting ? "Submitting..." : "Connect with us"}
          </Button>

        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryModal;
