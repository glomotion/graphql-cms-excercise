import {
  getHomepage,
  getFaqs,
  getFaq,
} from './server';

describe('Basic server lookup logic', () => {
  it('should correctly extract homepage cms data from json', () => {
    getHomepage().then((data) => {
      expect(data.heading).toBe('Qantas Cars');
      expect(data.subheading).toBe('Powered by the sun with the best safety record on the planet');
      expect(data.heroImage.fullRes).toBe('https://drive.google.com/uc?id=1svw9VdyX4fyRHd1kggq0akDSafmdOS7L');
      expect(data.heroImage.halfRes).toBe('https://drive.google.com/uc?id=1wgtWbUZi0y3_Glo9xEURf7xH_hceiNAK');
    });
  });

  it('should correctly extract faqs cms data from json', () => {
    getFaqs().then((data) => {
      expect(data[0].title).toBe('How can I check my estimated delivery window?');
      expect(data[1].title).toBe('When will I be invited to configure my Model 3, and when can I take delivery?');
      expect(data[2].title).toBe('Which Model 3 features are currently available?');

      expect(data[0].body).toBe('Model 3 reservation holders can check their latest delivery timing estimate in their Tesla Account.');
      expect(data[1].body).toBe('<script>console.log(\'testing react-markdown sanitisation!\')</script><p>Model 3 reservation holders are receiving invitations to order and design Model 3 based on the time and date that they placed their reservation. Current Tesla owners have priority as a thank you for their support.</p><p>Deliveries will start in the United States first, with international deliveries starting in left-hand drive markets in late 2018, followed by right-hand drive markets in 2019.</p>');
      expect(data[2].body).toBe('Our first Model 3 in production comes with a long-range battery, 310 miles of range, rear-wheel drive and premium upgrades throughout, beginning at $49,000 USD. In early 2018, we will introduce the option for a standard battery with 220 miles of range and standard equipment, beginning at $35,000 USD.');
    });
  });

  it('should correctly select 1 faq from json', () => {
    getFaq({ id: 1 }).then((data) => {
      expect(data.title).toBe('When will I be invited to configure my Model 3, and when can I take delivery?');
      expect(data.body).toBe('<script>console.log(\'testing react-markdown sanitisation!\')</script><p>Model 3 reservation holders are receiving invitations to order and design Model 3 based on the time and date that they placed their reservation. Current Tesla owners have priority as a thank you for their support.</p><p>Deliveries will start in the United States first, with international deliveries starting in left-hand drive markets in late 2018, followed by right-hand drive markets in 2019.</p>');
    });
  });
});
