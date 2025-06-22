// Simple database using localStorage for consultation requests
export interface ConsultationRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  description: string;
  preferredContactMethod: 'email' | 'phone' | 'whatsapp';
  urgency: 'low' | 'medium' | 'high';
  createdAt: string;
  status: 'pending' | 'contacted' | 'scheduled' | 'completed';
}

const DB_KEY = 'consultation_requests';

// Get all consultation requests
export const getConsultationRequests = (): ConsultationRequest[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(DB_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading consultation requests:', error);
    return [];
  }
};

// Save a new consultation request
export const saveConsultationRequest = (request: Omit<ConsultationRequest, 'id' | 'createdAt' | 'status'>): ConsultationRequest => {
  const newRequest: ConsultationRequest = {
    ...request,
    id: generateId(),
    createdAt: new Date().toISOString(),
    status: 'pending'
  };

  const requests = getConsultationRequests();
  requests.push(newRequest);
  
  try {
    localStorage.setItem(DB_KEY, JSON.stringify(requests));
    return newRequest;
  } catch (error) {
    console.error('Error saving consultation request:', error);
    throw new Error('Falha ao salvar solicitação');
  }
};

// Update consultation status
export const updateConsultationStatus = (id: string, status: ConsultationRequest['status']): boolean => {
  const requests = getConsultationRequests();
  const index = requests.findIndex(req => req.id === id);
  
  if (index === -1) return false;
  
  requests[index].status = status;
  
  try {
    localStorage.setItem(DB_KEY, JSON.stringify(requests));
    return true;
  } catch (error) {
    console.error('Error updating consultation status:', error);
    return false;
  }
};

// Get consultation by ID
export const getConsultationById = (id: string): ConsultationRequest | null => {
  const requests = getConsultationRequests();
  return requests.find(req => req.id === id) || null;
};

// Delete consultation request
export const deleteConsultationRequest = (id: string): boolean => {
  const requests = getConsultationRequests();
  const filteredRequests = requests.filter(req => req.id !== id);
  
  try {
    localStorage.setItem(DB_KEY, JSON.stringify(filteredRequests));
    return true;
  } catch (error) {
    console.error('Error deleting consultation request:', error);
    return false;
  }
};

// Export data for backup/migration
export const exportConsultationData = (): string => {
  const requests = getConsultationRequests();
  return JSON.stringify(requests, null, 2);
};

// Import data from backup
export const importConsultationData = (data: string): boolean => {
  try {
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) {
      localStorage.setItem(DB_KEY, JSON.stringify(parsed));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error importing consultation data:', error);
    return false;
  }
};

// Simple ID generator
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Stats functions
export const getConsultationStats = () => {
  const requests = getConsultationRequests();
  
  return {
    total: requests.length,
    pending: requests.filter(r => r.status === 'pending').length,
    contacted: requests.filter(r => r.status === 'contacted').length,
    scheduled: requests.filter(r => r.status === 'scheduled').length,
    completed: requests.filter(r => r.status === 'completed').length,
    thisMonth: requests.filter(r => {
      const created = new Date(r.createdAt);
      const now = new Date();
      return created.getMonth() === now.getMonth() && created.getFullYear() === now.getFullYear();
    }).length,
    highUrgency: requests.filter(r => r.urgency === 'high').length
  };
};

// Email notification simulation (can be replaced with real email service)
export const sendNotification = async (request: ConsultationRequest): Promise<boolean> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real application, this would send an email via EmailJS, Nodemailer, etc.
  console.log('Notification sent for consultation request:', request.id);
  
  // Store notification log
  const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
  notifications.push({
    id: generateId(),
    consultationId: request.id,
    type: 'new_consultation',
    sentAt: new Date().toISOString(),
    recipient: 'admin@dheiver-ai-solutions.com'
  });
  localStorage.setItem('notifications', JSON.stringify(notifications));
  
  return true;
}; 