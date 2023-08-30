exports.isValidString = function (value) {
    if (typeof value === 'undefined' || value === null) return false;
    if (typeof value === 'string' && value.trim().length === 0) return false;
    return true;
  };
  exports.isValidMobile = function (value) {
    return /^[6-9]\d{9}$/.test(value);
  };
  
  exports.isValidEmailSyntax = (email) => {
    return /^[a-z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-z0-9])*@gmail\.com$/.test(email);
  };
  
  exports.isOnlyLetters = (str) => {
    return /^[A-Za-z\s]+$/.test(str);
  };
  exports.isValidPassword = function (Password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
      Password
    );
  };
  