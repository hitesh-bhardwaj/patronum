import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"
import React from "react"

const BreadcrumbComponent = ({ capitalizeLinks = true, middleLink, middleLinkName }) => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path);

    const capitalizeAndFormat = (str) => {
        return str
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                {pathNames.length > 0 && <BreadcrumbSeparator />}
                {middleLinkName && (
                    <>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/${middleLink}`}>{middleLinkName}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </>
                )}
                {pathNames.map((link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let itemLink = capitalizeLinks ? capitalizeAndFormat(link) : link;
                    return (
                        <React.Fragment key={index}>
                            <BreadcrumbItem className="last-of-type:text-primary">
                            <BreadcrumbLink
                                    className={`truncate lg:max-w-[400px] md:max-w-[300px] max-w-[120px]`}
                                    href={href}
                                    title={itemLink}
                                >
                                    {itemLink}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {pathNames.length !== index + 1 && <BreadcrumbSeparator />}
                        </React.Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default BreadcrumbComponent;
