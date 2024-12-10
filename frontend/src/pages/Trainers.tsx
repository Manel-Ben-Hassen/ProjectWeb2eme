import React, { useState } from 'react';
import { Star, MessageCircle, Calendar } from 'lucide-react';
import Modal from '../components/modals/Modal';
import ContactForm from '../components/trainers/ContactForm';

const Trainers = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<any>(null);

  const handleContactSubmit = (data: any) => {
    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', data);
    alert('Message sent successfully! The trainer will contact you soon.');
    setSelectedTrainer(null);
  };

  const trainers = [
    {
      name: "Sarah Johnson",
      specialty: "HIIT & Cardio",
      experience: "8+ years",
      rating: 4.9,
      reviews: 127,
      availability: "Mon-Fri",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      bio: "Certified personal trainer specializing in high-intensity workouts and cardio programs. Expert in helping clients achieve their weight loss goals."
    },
    {
      name: "Mike Thompson",
      specialty: "Strength Training",
      experience: "10+ years",
      rating: 4.8,
      reviews: 195,
      availability: "Tue-Sat",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      bio: "Former athlete turned personal trainer. Specializes in bodyweight exercises and strength training. Passionate about helping clients build lean muscle."
    },
    {
      name: "Emma Davis",
      specialty: "Yoga & Flexibility",
      experience: "6+ years",
      rating: 5.0,
      reviews: 156,
      availability: "Mon-Sun",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Certified yoga instructor with expertise in flexibility training and mindfulness. Helps clients improve mobility and reduce stress through targeted programs."
    }
  ];

  return (
    <>
      <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Expert Trainers
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Work with certified professionals who are passionate about helping you achieve your fitness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl font-semibold text-white">{trainer.name}</h3>
                    <p className="text-gray-200">{trainer.specialty}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="ml-1 text-gray-700 dark:text-gray-300">{trainer.rating}</span>
                      <span className="ml-1 text-gray-500 dark:text-gray-400">({trainer.reviews} reviews)</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">{trainer.experience}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{trainer.bio}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="h-5 w-5 mr-2" />
                      {trainer.availability}
                    </div>
                    <button 
                      onClick={() => setSelectedTrainer(trainer)}
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
        title={`Contact ${selectedTrainer?.name}`}
      >
        {selectedTrainer && (
          <ContactForm
            trainerName={selectedTrainer.name}
            onSubmit={handleContactSubmit}
          />
        )}
      </Modal>
    </>
  );
};

export default Trainers;