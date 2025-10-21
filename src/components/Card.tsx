"use client";
import { Card, CardContent } from "@/components/ui/card";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";

type Inputs = {
  url: string;
};

const UrlCard = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await fetch("https://n8n.aotearoa.cc/user/url", {
      method: "POST",
      body: JSON.stringify({
        url: data.url,
      }),
      credentials: "include",
    });
    console.log(await res.json());
  };

  return (
    <div className="">
      <Card className="bg-gray-400 text-gray-900">
        <CardContent className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2  "
          >
            <div className="flex flex-col gap-2">
              <Label>Url</Label>
              <Input
                {...register("url")}
                className="focus-visible:ring-0 bg-gray-300"
              />
            </div>

            <Button type="submit" className="bg-gray-400 text-gray-900">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UrlCard;
