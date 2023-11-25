"use client";

import { BIO_MAX_LENGTH, User } from "@/schema/User.type";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  Link1Icon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/common/Skeleton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEditUserProfileForm } from "../hooks/useEditUserProfileForm";
import { BioCounter } from "./BioCounter";

export type EditUserProfileCardProps = {
  user: User;
};

export const EditUserProfileCard: React.FC<EditUserProfileCardProps> = ({
  user,
}: EditUserProfileCardProps) => {
  const {
    onSubmit,
    register,
    control,
    isDirty,
    isSubmitting,
    isValid,
    errors,
  } = useEditUserProfileForm(user);

  return (
    <form onSubmit={onSubmit}>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border">
              <AvatarImage src={user.icon} alt={user.name} />
              <AvatarFallback>
                <Skeleton className="h-16 w-16 rounded-full border" />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Input
                  required
                  type="text"
                  placeholder="AtCoder ID"
                  {...register("atcoderId")}
                />
                {errors.atcoderId && (
                  <p className="whitespace-nowrap text-sm text-red-500">
                    {errors.atcoderId.message}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Input
                  required
                  type="text"
                  placeholder="Name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="whitespace-nowrap text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <Input
              type="text"
              placeholder="Occupation"
              className="w-64"
              {...register("occupation")}
            />
            <div className="flex items-center gap-2">
              <p>at</p>
              <Input
                type="text"
                placeholder="Organization"
                className="w-64"
                {...register("organization")}
              />
            </div>
            {errors.occupation && (
              <p className="whitespace-nowrap text-sm text-red-500">
                {errors.occupation.message}
              </p>
            )}
            {errors.organization && (
              <p className="whitespace-nowrap text-sm text-red-500">
                {errors.organization.message}
              </p>
            )}
          </div>
          <div className="flex flex-col items-end gap-1">
            <Textarea placeholder="Bio" className="h-32" {...register("bio")} />
            <BioCounter control={control}>
              {(count) => (
                <CardDescription className="text-sm">
                  {count}/{BIO_MAX_LENGTH}
                </CardDescription>
              )}
            </BioCounter>
            {errors.bio && (
              <p className="whitespace-nowrap text-sm text-red-500">
                {errors.bio.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <GitHubLogoIcon className="h-6 w-6" />
              <Input
                type="text"
                placeholder="GitHub"
                className="w-72"
                {...register("links.github")}
              />
              {errors.links?.github && (
                <p className="whitespace-nowrap text-sm text-red-500">
                  {errors.links.github.message}
                </p>
              )}
            </div>
            <div className="flex items-center gap-4">
              <TwitterLogoIcon className="h-6 w-6" />
              <Input
                type="text"
                placeholder="Twitter"
                className="w-72"
                {...register("links.twitter")}
              />
              {errors.links?.twitter && (
                <p className="whitespace-nowrap text-sm text-red-500">
                  {errors.links.twitter.message}
                </p>
              )}
            </div>
            <div className="flex items-center gap-4">
              <Link1Icon className="h-6 w-6" />
              <Input
                type="text"
                placeholder="Website"
                className="w-72"
                {...register("links.website")}
              />
              {errors.links?.website && (
                <p className="whitespace-nowrap text-sm text-red-500">
                  {errors.links.website.message}
                </p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="ml-auto"
            disabled={!isDirty || !isValid || isSubmitting}
          >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default EditUserProfileCard;
