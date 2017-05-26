package ttu.tteh.user;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	private UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	User addUser(User user) {
		// here you can do some validations etc before saving the user
		return userRepository.save(user);
	}

	List<User> getAllUsers() {
		return userRepository.findAll();
	}

	User getUserById(long userId) {
		return userRepository.findOne(userId);
	}

	Optional<User> loginUser(LoginHelper login) {
		return userRepository.findByEmailAndPassword(login.getEmail(), login.getPassword());
	}
}
