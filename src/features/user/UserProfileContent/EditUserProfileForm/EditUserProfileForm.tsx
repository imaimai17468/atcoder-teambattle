import { BIO_MAX_LENGTH, User } from "@/schema/User.type";
import {
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { useEditUserProfileForm } from "../hooks/useEditUserProfileForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BioCounter } from "../BioCounter";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  Link1Icon,
} from "@radix-ui/react-icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UserAvatar } from "@/components/common/UserAvatar";

type EditUserProfileFormProps = {
  user: User;
};

export const EditUserProfileForm: React.FC<EditUserProfileFormProps> = ({
  user,
}: EditUserProfileFormProps) => {
  const { onSubmit, form } = useEditUserProfileForm(user);
  const { isDirty, isSubmitting, isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader>
          <div className="flex items-center gap-4">
            <UserAvatar user={user} withoutCard />
            <div className="flex flex-col gap-4 md:flex-row">
              <FormField
                control={form.control}
                name="atcoderId"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>AtCoder ID (required)</FormLabel>
                    <FormControl>
                      <Input
                        className="md:w-72"
                        type="text"
                        placeholder="AtCoder ID"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Name (required)</FormLabel>
                    <FormControl>
                      <Input
                        className="md:w-72"
                        type="text"
                        placeholder="Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Occupation</FormLabel>
                  <FormControl>
                    <Input
                      className="md:w-64"
                      type="text"
                      placeholder="Occupation"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Organization</FormLabel>
                  <FormControl>
                    <Input
                      className="md:w-64"
                      type="text"
                      placeholder="Organization"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea placeholder="Bio" {...field} />
                </FormControl>
                <BioCounter control={form.control}>
                  {(count) => (
                    <CardDescription className="text-sm">
                      {count}/{BIO_MAX_LENGTH}
                    </CardDescription>
                  )}
                </BioCounter>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="links.github"
              render={({ field }) => (
                <FormItem className="flex items-center gap-4">
                  <GitHubLogoIcon className="h-6 w-6" />
                  <FormControl>
                    <Input
                      className="w-72"
                      type="text"
                      placeholder="GitHub"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="links.twitter"
              render={({ field }) => (
                <FormItem className="flex items-center gap-4">
                  <TwitterLogoIcon className="h-6 w-6" />
                  <FormControl>
                    <Input
                      className="w-72"
                      type="text"
                      placeholder="Twitter"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="links.website"
              render={({ field }) => (
                <FormItem className="flex items-center gap-4">
                  <Link1Icon className="h-6 w-6" />
                  <FormControl>
                    <Input
                      className="w-72"
                      type="text"
                      placeholder="Website"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
      </form>
    </Form>
  );
};
