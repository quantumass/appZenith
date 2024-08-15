import { useTranslations } from 'next-intl';

export default function FAQ() {
  const t = useTranslations('FAQ');

  return (
    <section className="bg-gray-900 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center pb-12 md:pb-20">
          <h2 className="h2 mb-4 text-white">{t('title')}</h2>
          <p className="text-xl text-gray-400">{t('description')}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="border-b border-gray-800 py-6">
            <h4 className="text-lg text-white mb-2">{t('question1.title')}</h4>
            <p className="text-gray-400">{t('question1.answer')}</p>
          </div>

          <div className="border-b border-gray-800 py-6">
            <h4 className="text-lg text-white mb-2">{t('question2.title')}</h4>
            <p className="text-gray-400">{t('question2.answer')}</p>
          </div>

          <div className="border-b border-gray-800 py-6">
            <h4 className="text-lg text-white mb-2">{t('question3.title')}</h4>
            <p className="text-gray-400">{t('question3.answer')}</p>
          </div>

          <div className="border-b border-gray-800 py-6">
            <h4 className="text-lg text-white mb-2">{t('question4.title')}</h4>
            <p className="text-gray-400">{t('question4.answer')}</p>
          </div>

          <div className="border-b border-gray-800 py-6">
            <h4 className="text-lg text-white mb-2">{t('question5.title')}</h4>
            <p className="text-gray-400">{t('question5.answer')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}