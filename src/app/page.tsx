import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
    title: "Money Manager",
    description: "Money manager dashboard",
};

export default function Home() {
    return (
        <>
            <DefaultLayout>
                <ECommerce />
            </DefaultLayout>
        </>
    );
}
