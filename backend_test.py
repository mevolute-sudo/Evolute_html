import requests
import sys
from datetime import datetime
import json

class EvoluteMarketingAPITester:
    def __init__(self, base_url="https://digital-evolute.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2, default=str)}")
                except:
                    print(f"   Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text}")

            return success, response.json() if response.headers.get('content-type', '').startswith('application/json') else {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            return False, {}
        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection error")
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        success, response = self.run_test(
            "Root API Endpoint",
            "GET",
            "",
            200
        )
        return success

    def test_contact_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+91 12345 67890",
            "message": "This is a test message for the contact form."
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "contact",
            200,
            data=test_data
        )
        
        if success and 'id' in response:
            print(f"   Contact ID: {response['id']}")
            return response['id']
        return None

    def test_get_contact_submissions(self):
        """Test retrieving contact submissions"""
        success, response = self.run_test(
            "Get Contact Submissions",
            "GET",
            "contact",
            200
        )
        
        if success:
            print(f"   Found {len(response)} contact submissions")
        return success

    def test_status_endpoint(self):
        """Test status check endpoints"""
        # Test POST status
        test_data = {
            "client_name": "Test Client"
        }
        
        success, response = self.run_test(
            "Create Status Check",
            "POST",
            "status",
            200,
            data=test_data
        )
        
        if not success:
            return False
            
        # Test GET status
        success, response = self.run_test(
            "Get Status Checks",
            "GET",
            "status",
            200
        )
        
        return success

def main():
    print("🚀 Starting Evolute Marketing API Tests")
    print("=" * 50)
    
    # Setup
    tester = EvoluteMarketingAPITester()
    
    # Test API root
    if not tester.test_root_endpoint():
        print("❌ Root API endpoint failed, stopping tests")
        return 1

    # Test status endpoints
    if not tester.test_status_endpoint():
        print("❌ Status endpoints failed")

    # Test contact form submission
    contact_id = tester.test_contact_submission()
    if not contact_id:
        print("❌ Contact form submission failed")

    # Test getting contact submissions
    if not tester.test_get_contact_submissions():
        print("❌ Getting contact submissions failed")

    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Tests Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())