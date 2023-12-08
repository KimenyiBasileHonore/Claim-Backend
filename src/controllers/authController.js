import User from '../models/user'
import Company from '../models/company';
import generateToken from '../helpers/tokenGenerator';


const userSignup = async (req, res) => {
  try {
    const { firstName, lastName, nID, phone, email, password,role } = req.body;


    const user = new User({
      firstName,
      lastName,
      nID,
      phone,
      email,
      password,
      role,
    });


    await user.save();
    console.log(user);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json(error );
  }
};


const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;


    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'User logged in successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in user' });
  }
};


const companySignup = async (req, res) => {
  try {
    const { CompanyName, Location, phone, email, password, role } = req.body;

    // Check if the company name already exists in the database
    const existingCompany = await Company.findOne({ CompanyName });

    if (existingCompany) {
      return res.status(400).json({ error: 'Company name already exists' });
    }

    const company = new Company({
      CompanyName,
      Location,
      phone,
      email,
      password,
      role,
    });

    await company.save();

    res.status(201).json({ message: 'Company registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering company' });
  }
};

const getCompanyNames = async (req, res) => {
  try {
    // Fetch the list of registered company names from the database
    const companies = await Company.find({}, 'CompanyName'); // Assuming 'CompanyName' is the field in your Company model that stores company names
    const companyNames = companies.map((company) => company.CompanyName);
    res.status(200).json(companyNames);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching company names' });
  }
};





const companyLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const company = await Company.findOne({ email });
    if (!company || company.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const tokenn=await generateToken(company.email);
    res.status(200).json({ message: 'Company logged in successfully',token:tokenn });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in company' });
  }
};

module.exports = { userSignup, userLogin, companySignup, companyLogin, getCompanyNames  };

