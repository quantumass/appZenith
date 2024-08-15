'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import FormModal from '../components/form'
import { useState } from 'react'

export default function Zigzag() {
    const t = useTranslations('Zigzag')
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <section>
            <FormModal isOpen={modalIsOpen} onRequestClose={closeModal} />
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                            {t('tagline')}
                        </div>
                        <h1 className="h2 mb-4">
                            {t('mainTitle')}
                        </h1>
                        <p className="text-xl text-gray-400">
                            {t('description')}
                        </p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">
                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up"
                            >
                                <Image
                                    className="max-w-full mx-auto md:max-w-none h-auto"
                                    src={FeatImage01}
                                    width={540}
                                    height={405}
                                    alt="Features 01"
                                />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                data-aos="fade-right"
                            >
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                                        {t('feature1.title')}
                                    </div>
                                    <h3 className="h3 mb-3">
                                        {t('feature1.subtitle')}
                                    </h3>
                                    <p className="text-xl text-gray-400 mb-4">
                                        {t('feature1.description')}
                                    </p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>
                                                {t('feature1.bullet1')}
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>
                                                {t('feature1.bullet2')}
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>
                                                {t('feature1.bullet3')}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                                data-aos="fade-up"
                            >
                                <Image
                                    className="max-w-full mx-auto md:max-w-none h-auto"
                                    src={FeatImage02}
                                    width={540}
                                    height={405}
                                    alt="Features 02"
                                />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                data-aos="fade-left"
                            >
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                                        {t('feature2.title')}
                                    </div>
                                    <h3 className="h3 mb-3">
                                        {t('feature2.subtitle')}
                                    </h3>
                                    <p className="text-xl text-gray-400 mb-4">
                                        {t('feature2.description')}
                                    </p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>
                                                {t('feature2.bullet1')}
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>
                                                {t('feature2.bullet2')}
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>
                                                {t('feature2.bullet3')}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up"
                            >
                                <Image
                                    className="max-w-full mx-auto md:max-w-none h-auto"
                                    src={FeatImage03}
                                    width={540}
                                    height={405}
                                    alt="Features 03"
                                />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                data-aos="fade-right"
                            >
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                                        {t('feature3.title')}
                                    </div>
                                    <h3 className="h3 mb-3">
                                        {t('feature3.subtitle')}
                                    </h3>
                                    <p className="text-xl text-gray-400 mb-4">
                                        {t('feature3.description')}
                                    </p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>
                                                {t('feature3.bullet1')}
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>
                                                {t('feature3.bullet2')}
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>
                                                {t('feature3.bullet3')}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div data-aos="fade-up" data-aos-delay="400">
                    <a
                        className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0 rounded"
                        href="#0"
                        onClick={openModal}
                    >
                        {t('callToAction')}
                    </a>
                </div>
            </div>
        </section>
    )
}
