"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Pencil, Camera, Save, X, KeyRound, Mail } from "lucide-react";
import { FileUpload } from "@/components/ui/file-upload";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

const DetailAccount = () => {
  const initialProfile = {
    name: "Andrew Cho",
    phone: "62812345678989",
    email: "choandrew900@gmail.com",
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState(false);
  const [profile, setProfile] = useState(initialProfile);
  const [originalProfile, setOriginalProfile] = useState(initialProfile);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.id]: e.target.value });
  };

  const handleSave = () => {
    if (isEditingEmail && otp.length !== 6) {
      setError("Kode OTP harus 6 digit.");
      return;
    }

    if (isEditingPassword && password !== confirmPassword) {
      setError("Password dan konfirmasi tidak cocok.");
      return;
    }

    setIsEditing(false);
    setEditingPhoto(false);
    setIsEditingEmail(false);
    setIsEditingPassword(false);
    setOriginalProfile(profile);
    setPassword("");
    setConfirmPassword("");
    setOtp("");
    setError("");
    console.log("Saved Profile:", profile);
  };

  const handleCancel = () => {
    setProfile(originalProfile);
    setIsEditing(false);
    setEditingPhoto(false);
    setIsEditingEmail(false);
    setIsEditingPassword(false);
    setPassword("");
    setConfirmPassword("");
    setOtp("");
    setError("");
  };

  const handleFileUpload = (files: File[]) => {
    console.log("Uploaded Files:", files);
  };

  return (
    <Card className="flex gap-6 justify-center items-center p-6">
      <CardHeader className="flex flex-col items-center w-2/4 gap-4">
        <div className="relative">
          {!editingPhoto ? (
            <>
              <Avatar className="h-32 w-32">
                <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <Button
                variant="secondary"
                size="icon"
                className="absolute bottom-0 right-0 rounded-full"
                onClick={() => setEditingPhoto(true)}
              >
                <Camera className="w-4 h-4" />
              </Button>
            </>
          ) : (
            <div className="w-40">
              <FileUpload onChange={handleFileUpload} />
            </div>
          )}
        </div>

        {!isEditing ? (
          <Button
            className="w-full flex gap-2 items-center"
            onClick={() => setIsEditing(true)}
          >
            <Pencil className="w-4 h-4" />
            Edit Profile
          </Button>
        ) : (
          <div className="flex flex-col gap-2 w-full">
            <Button
              className="w-full flex gap-2 items-center"
              onClick={handleSave}
            >
              <Save className="w-4 h-4" />
              Save
            </Button>
            <Button
              className="w-full flex gap-2 items-center"
              variant="outline"
              onClick={handleCancel}
            >
              <X className="w-4 h-4" />
              Cancel
            </Button>
            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-4 w-full">
        <div className="space-y-1">
          <Label htmlFor="name">Nama Lengkap</Label>
          <Input
            id="name"
            value={profile.name}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="phone">Nomor Telepon</Label>
          <Input
            id="phone"
            value={profile.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <Label htmlFor="email">Email</Label>
            {isEditing && !isEditingEmail && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsEditingEmail(true)}
              >
                <Mail className="w-4 h-4 mr-1" />
                Edit Email
              </Button>
            )}
          </div>
          <Input
            id="email"
            value={profile.email}
            onChange={handleInputChange}
            disabled={!isEditingEmail}
          />
        </div>

        {isEditingEmail && (
          <div className="space-y-2">
            <Label>Kode OTP</Label>
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        )}

        {isEditing && !isEditingPassword && (
          <Button
            variant="ghost"
            size="sm"
            className="mt-4"
            onClick={() => setIsEditingPassword(true)}
          >
            <KeyRound className="w-4 h-4 mr-1" />
            Edit Password
          </Button>
        )}

        {isEditingPassword && (
          <>
            <div className="space-y-1">
              <Label htmlFor="password">Password Baru</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default DetailAccount;
