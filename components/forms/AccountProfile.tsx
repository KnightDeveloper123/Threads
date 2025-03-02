"use client"

import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { UserSchema } from '@/lib/validation/userSchema';
import { Avatar, Box, Button, Fieldset, Flex, Image, Input, Stack, Text, Textarea } from '@chakra-ui/react';
import { Field } from '@/components/ui/field';
import { FileUploadList, FileUploadRoot, FileUploadTrigger } from "@/components/ui/file-upload";
import { HiUpload } from "react-icons/hi";


interface Props {
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
    };

    btnTitle: string;
}

export default function AccountProfile({ user, btnTitle }: Props) {
    const { register, getValues, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(UserSchema),
        defaultValues: {
            profile_photo: user?.image || "",
            name: user.name || "",
            username: user.username || "",
            bio: user.bio || ""
        }
    });

    const allValues = getValues();
    console.log(allValues);

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Fieldset.Root size="md" w={'full'}>
                <Fieldset.Content>
                    <Field label="Profile Photo" invalid={!!errors.profile_photo}>
                        <Flex flexDir={{ base: 'column', sm: 'row' }} alignItems={{ base: 'start', sm: 'center' }} gap={{ base: 2, sm: 10 }}>
                            {allValues.profile_photo ?
                                <Image src={allValues.profile_photo} alt='profile photo' w={'150px'} h={'150px'} borderRadius={'full'} /> :
                                <Image src={"./assets/profile.svg"} alt='profile photo' w={'150px'} h={'150px'} borderRadius={'full'} />
                            }
                            <Input type='file' p={2} border={'none'} {...register("profile_photo")} accept="image/*" />
                        </Flex>
                    </Field>

                    <Field label="Name" invalid={!!errors.name}>
                        <Input placeholder='Name' {...register("name")} />
                        {errors.name && <Text color={'#f87171'} fontSize={'12px'} mt={0}>{errors.name?.message}</Text>}
                    </Field>

                    <Field label="User name" invalid={!!errors.username}>
                        <Input placeholder='User Name' {...register("username")} />
                        {errors.username && <Text color={'#f87171'} fontSize={'12px'} mt={0}>{errors.bio?.message}</Text>}
                    </Field>

                    <Field label="bio" invalid={!!errors.bio}>
                        <Textarea placeholder='About yourself' rows={5} {...register("bio")} />
                        {errors.bio && <Text color={'#f87171'} fontSize={'12px'} mt={0}>{errors.bio?.message}</Text>}
                    </Field>
                </Fieldset.Content>

                <Button type="submit" alignSelf="flex-start">
                    {btnTitle}
                </Button>
            </Fieldset.Root>
        </form>
    )
}